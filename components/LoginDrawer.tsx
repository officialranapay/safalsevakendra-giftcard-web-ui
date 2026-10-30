
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Mail,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  LoaderCircle,
  CheckCircle2,
  Sparkles,
  UserRound,
} from "lucide-react";

import { useApp } from "@/lib/store";
import CodeSlots from "./CodeSlots";

import {
  useSendOtp,
  useResendOtp,
  useVerifyOtp,
  useRegister,
} from "@/services/auth/auth.hooks";

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const update = () => setDesktop(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}

export default function LoginDrawer() {
  const { loginOpen, setLoginOpen, login } = useApp();
  const isDesktop = useIsDesktop();

  const sendOtpMutation = useSendOtp();
  const resendOtpMutation = useResendOtp();
  const verifyOtpMutation = useVerifyOtp();
  const registerMutation = useRegister();

  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [left, setLeft] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const otpContainerRef = useRef<HTMLDivElement>(null);
  const verifyingRef = useRef(false);

  const loading =
    sendOtpMutation.isPending ||
    resendOtpMutation.isPending ||
    verifyOtpMutation.isPending ||
    registerMutation.isPending;

  const close = useCallback(() => {
    setLoginOpen(false);
    setStep(1);
    setOtp("");
    setErr("");
    setLeft(0);
    setName("");
    setEmail("");
    setStatus("idle");
    verifyingRef.current = false;
  }, [setLoginOpen]);

  useEffect(() => {
    if (!left) return;

    const timer = window.setTimeout(() => {
      setLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [left]);

  useEffect(() => {
    if (!loginOpen || step !== 2) return;

    const timer = window.setTimeout(() => {
      const input =
        otpContainerRef.current?.querySelector<HTMLInputElement>(
          "input"
        );

      input?.focus();
      input?.setSelectionRange?.(
        input.value.length,
        input.value.length
      );
    }, 150);

    return () => window.clearTimeout(timer);
  }, [step, loginOpen]);

  useEffect(() => {
    if (!loginOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [loginOpen, close]);

  const getErrorMessage = (error: unknown) =>
    error instanceof Error
      ? error.message
      : "Something went wrong. Please try again.";

  const submitEmail = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setErr("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setErr("Please enter a valid email address.");
      return;
    }

    try {
      await sendOtpMutation.mutateAsync({
        email: normalizedEmail,
      });

      setEmail(normalizedEmail);
      setOtp("");
      setLeft(30);
      setStep(2);
      setStatus("idle");
    } catch (error) {
      setErr(getErrorMessage(error));
    }
  };

  const verify = async (code: string) => {
    if (verifyingRef.current || loading || code.length !== 6) {
      return;
    }

    if (left === 0) {
      setErr("OTP expired. Please resend OTP.");
      return;
    }

    verifyingRef.current = true;
    setErr("");
    setStatus("idle");

    try {
      const response = await verifyOtpMutation.mutateAsync({
        email,
        otp: code,
      });

      const data = response.data;

      if (!response.success || !data) {
        throw new Error(
          response.message || "OTP verification failed."
        );
      }

      if ("token" in data && data.token && data.user) {
        login({
          ...data.user,
          name: data.user.fullName,
          loggedIn: true,
        });

        close();
        return;
      }

      if (
        "isNewUser" in data &&
        data.isNewUser &&
        data.verificationToken
      ) {
        setStep(3);
        setOtp("");
        setErr("");
        setStatus("idle");
        return;
      }

      throw new Error("Unexpected OTP verification response.");
    } catch (error) {
      setStatus("error");
      setErr(getErrorMessage(error));
      setOtp("");
      setStatus("idle");
    } finally {
      verifyingRef.current = false;
    }
  };

  const submitOtp = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await verify(otp);
  };

  const resendOtp = async () => {
    if (left > 0 || loading) return;

    setErr("");
    setOtp("");
    setStatus("idle");

    try {
      await resendOtpMutation.mutateAsync({ email });
      setLeft(30);
    } catch (error) {
      setErr(getErrorMessage(error));
    }
  };

  const submitProfile = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setErr("");

    const fullName = name.trim();

    if (!fullName) {
      setErr("Please enter your full name.");
      return;
    }

    try {
      const response = await registerMutation.mutateAsync({
        fullName,
      });

      const data = response.data;

      if (!response.success || !data?.token || !data?.user) {
        throw new Error(
          response.message || "Registration failed."
        );
      }

      login({
        ...data.user,
        name: data.user.fullName,
        loggedIn: true,
      });

      close();
    } catch (error) {
      setErr(getErrorMessage(error));
    }
  };

  const inputClass =
    "mt-2 min-h-[52px] w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10";

  const primaryButtonClass =
    "group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

  return (
    <AnimatePresence>
      {loginOpen && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close login dialog"
            className="fixed inset-0 z-[60] cursor-default bg-slate-950/45 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Responsive dialog */}
          <div className="pointer-events-none fixed inset-0 z-[61] flex items-end justify-center sm:items-center sm:p-5">
            <motion.section
              key={isDesktop ? "desktop" : "mobile"}
              role="dialog"
              aria-modal="true"
              aria-labelledby="login-title"
              initial={
                isDesktop
                  ? { opacity: 0, scale: 0.96, y: 12 }
                  : { y: "100%" }
              }
              animate={
                isDesktop
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { y: 0 }
              }
              exit={
                isDesktop
                  ? { opacity: 0, scale: 0.96, y: 12 }
                  : { y: "100%" }
              }
              transition={
                isDesktop
                  ? { type: "spring", duration: 0.38, bounce: 0.12 }
                  : { type: "tween", duration: 0.28 }
              }
              className="pointer-events-auto relative max-h-[92dvh] w-full overflow-y-auto rounded-t-[28px] border border-white/80 bg-white shadow-2xl shadow-slate-950/20 sm:max-w-md sm:rounded-[28px]"
            >
              {/* Decorative header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-sky-700 px-6 pb-7 pt-7 text-white sm:px-8 sm:pt-8">
                <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-4 -top-8 h-28 w-28 rounded-full border border-white/10" />

                <button
                  type="button"
                  onClick={close}
                  aria-label="Close login"
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X size={19} />
                </button>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-inner">
                  {step === 1 ? (
                    <Mail size={23} strokeWidth={1.8} />
                  ) : step === 2 ? (
                    <ShieldCheck size={24} strokeWidth={1.8} />
                  ) : (
                    <UserRound size={23} strokeWidth={1.8} />
                  )}
                </div>

                <div className="relative mt-5">
                  <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
                   
                    Secure account access
                  </p>

                  <h2
                    id="login-title"
                    className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
                  >
                    {step === 1
                      ? "Welcome back"
                      : step === 2
                        ? "Verify your email"
                        : "Complete your profile"}
                  </h2>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                    {step === 1
                      ? "Sign in or create an account to continue shopping."
                      : step === 2
                        ? "Enter the verification code sent to your inbox."
                        : "Just one more step to get your account ready."}
                  </p>
                </div>

                {/* Step indicator */}
                <div className="relative mt-6 flex gap-2">
                  {[1, 2, 3].map((itemStep) => (
                    <div
                      key={itemStep}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        itemStep <= step
                          ? "bg-white"
                          : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Form body */}
              <div className="px-6 pb-7 pt-6 sm:px-8 sm:pb-8">
                <AnimatePresence mode="wait" initial={false}>
                  {/* STEP 1 */}
                  {step === 1 && (
                    <motion.form
                      key="email-step"
                      onSubmit={submitEmail}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <label
                        htmlFor="login-email"
                        className="text-sm font-semibold text-slate-800"
                      >
                        Email address
                      </label>

                      <div className="relative">
                        <Mail
                          size={18}
                          className="pointer-events-none absolute left-4 top-[29px] -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="login-email"
                          autoFocus
                          className={`${inputClass} pl-11`}
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                            setErr("");
                          }}
                          required
                        />
                      </div>

                      {err && (
                        <p
                          role="alert"
                          className="mt-3 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-sm text-red-600"
                        >
                          {err}
                        </p>
                      )}

                      <button
                        type="submit"
                        className={`${primaryButtonClass} mt-5`}
                        disabled={loading || !email.trim()}
                      >
                        {sendOtpMutation.isPending ? (
                          <>
                            <LoaderCircle
                              size={18}
                              className="animate-spin"
                            />
                            Sending verification code...
                          </>
                        ) : (
                          <>
                            Continue securely
                            <ArrowRight
                              size={18}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>

                      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                        We&apos;ll email you a one-time verification
                        code. No password needed.
                      </p>
                    </motion.form>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <motion.form
                      key="otp-step"
                      onSubmit={submitOtp}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <p className="text-sm leading-6 text-slate-600">
                        Enter the six-digit code sent to
                      </p>

                      <p className="mt-1 break-all text-sm font-semibold text-slate-900">
                        {email}
                      </p>

                      <div
                        ref={otpContainerRef}
                        className="mt-5 flex justify-center"
                      >
                        <CodeSlots
                          autoFocus
                          length={6}
                          value={otp}
                          status={status}
                          onChange={(value) => {
                            setOtp(value);
                            setErr("");
                            setStatus("idle");
                          }}
                          onComplete={(value) => {
                            void verify(value);
                          }}
                          accentColor="#0178D2"
                          inkColor="#16a34a"
                          slotColor="#f1f7fc"
                          digitColor="#0f172a"
                          dangerColor="#ef4444"
                          slotSize={40}
                          gap={7}
                          radius={11}
                          bounce={0.2}
                          settle={0.3}
                          rise={8}
                          cascade={20}
                          mask={false}
                          caret
                          disabled={loading || status === "success"}
                        />
                      </div>

                      {err && (
                        <p
                          role="alert"
                          className="mt-4 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-center text-sm text-red-600"
                        >
                          {err}
                        </p>
                      )}

                      <button
                        type="submit"
                        className={`${primaryButtonClass} mt-5`}
                        disabled={otp.length !== 6 || loading}
                      >
                        {verifyOtpMutation.isPending ? (
                          <>
                            <LoaderCircle
                              size={18}
                              className="animate-spin"
                            />
                            Verifying code...
                          </>
                        ) : (
                          <>
                            <ShieldCheck size={18} />
                            Verify and continue
                            <ArrowRight
                              size={17}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 text-sm font-medium text-brand transition hover:text-brand/75 disabled:cursor-not-allowed disabled:text-slate-400"
                        disabled={left > 0 || loading}
                        onClick={() => void resendOtp()}
                      >
                        {resendOtpMutation.isPending ? (
                          <>
                            <LoaderCircle
                              size={16}
                              className="animate-spin"
                            />
                            Resending code...
                          </>
                        ) : left > 0 ? (
                          `Resend code in ${left}s`
                        ) : (
                          "Didn't receive the code? Resend"
                        )}
                      </button>

                      <button
                        type="button"
                        className="mx-auto mt-1 flex min-h-10 items-center justify-center gap-2 text-sm text-slate-500 transition hover:text-slate-900"
                        onClick={() => {
                          setStep(1);
                          setOtp("");
                          setErr("");
                          setLeft(0);
                          setStatus("idle");
                        }}
                      >
                        <ArrowLeft size={15} />
                        Change email address
                      </button>
                    </motion.form>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <motion.form
                      key="profile-step"
                      onSubmit={submitProfile}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="mb-5 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-emerald-800">
                            Email verified successfully
                          </p>
                          <p className="mt-1 break-all text-xs text-emerald-700">
                            {email}
                          </p>
                        </div>
                      </div>

                      <label
                        htmlFor="login-full-name"
                        className="text-sm font-semibold text-slate-800"
                      >
                        Full name
                      </label>

                      <div className="relative">
                        <UserRound
                          size={18}
                          className="pointer-events-none absolute left-4 top-[29px] -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="login-full-name"
                          autoFocus
                          className={`${inputClass} pl-11`}
                          type="text"
                          autoComplete="name"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(event) => {
                            setName(event.target.value);
                            setErr("");
                          }}
                          required
                        />
                      </div>

                      {err && (
                        <p
                          role="alert"
                          className="mt-3 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-sm text-red-600"
                        >
                          {err}
                        </p>
                      )}

                      <button
                        type="submit"
                        className={`${primaryButtonClass} mt-5`}
                        disabled={loading || !name.trim()}
                      >
                        {registerMutation.isPending ? (
                          <>
                            <LoaderCircle
                              size={18}
                              className="animate-spin"
                            />
                            Creating account...
                          </>
                        ) : (
                          <>
                            Create my account
                            <ArrowRight
                              size={18}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Footer */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <ShieldCheck
                      size={15}
                      className="shrink-0 text-brand"
                    />
                    Secure email verification
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
