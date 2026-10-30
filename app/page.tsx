"use client";

import { useEffect, useState } from "react";

import HomeSkeleton from "@/components/HomeSkeleton";
import VerticalTabs from "@/components/VerticalTabs";
import { getSystemTokenApi } from "@/services/auth/system-token.api";

import {
  Hero,
  Categories,
  Popular,
  CategoryRow,
  Offers,
  Gallery,
  HowItWorks,
  TopBrands,
  FAQ,
} from "@/components/Sections";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadPage = async () => {
      try {
        // Pehle system token generate/verify karo
        await getSystemTokenApi();

        // Browser ka complete load wait karo
        if (document.readyState !== "complete") {
          await new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), {
              once: true,
            });
          });
        }

        // Images load hone ka wait karo
        const images = Array.from(document.images);

        await Promise.all(
          images.map((img) => {
            if (img.complete) return Promise.resolve();

            return new Promise<void>((resolve) => {
              img.addEventListener("load", () => resolve(), {
                once: true,
              });
              img.addEventListener("error", () => resolve(), {
                once: true,
              });
            });
          })
        );
await new Promise<void>((resolve) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resolve();
    });
  });
});

        await new Promise((resolve) => setTimeout(resolve, 300));

        if (active) setLoading(false);
      } catch (err) {
        console.error("HaryPay system token error:", err);

        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : "System token generate nahi ho paya."
          );
          setLoading(false);
        }
      }
    };

    loadPage();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <HomeSkeleton />;
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <p className="text-center text-red-600">
          {error}
        </p>
      </main>
    );
  }

  return (
    <>
      <Hero />
      <Categories />
      <VerticalTabs />
      <Popular />

      {[
        "Food",
        "Fashion",
        "Travel",
        "Entertainment",
        "Electronics",
      ].map((category) => (
        <CategoryRow key={category} category={category} />
      ))}

      <Offers />
      <Gallery />
      <HowItWorks />
      <TopBrands />
      <FAQ />
    </>
  );
}