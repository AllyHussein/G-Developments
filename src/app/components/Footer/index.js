"use client";

import React from "react";
import Links from "./Links";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 flex flex-col gap-10">
      <Links />

      <div className="flex flex-col-reverse sm:flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand Name */}
        <div className="md:self-end w-full md:w-auto text-center md:text-right">
          <h1 className="text-4xl md:text-8xl font-bold tracking-wide mt-5 sm:mt-0 text-left">
            G Developments
          </h1>
        </div>

        <div className="flex flex-col gap-10 w-full md:w-auto border-t border-gray-700 md:border-none mt-6 pt-6">
          <div className="max-w-sm">
            <p className="text-lg font-semibold mb-2 text-gray-400">
              Interest Form
            </p>
            <p className="text-gray-400">Looking for something specific?</p>
            <Link
              href="/interest-form"
              className="flex items-center text-white hover:text-gray-300 mt-2"
            >
              Submit Your Interest
              <Image
                src="/assets/arrow_right.png"
                alt="Interest"
                width={20}
                height={20}
                className="ml-2"
              />
            </Link>
          </div>

          <div className="flex justify-between flex-row gap-8">
            <div>
              <p className="text-lg font-semibold mb-3 text-gray-400">Social</p>
              <div className="flex flex-col gap-2">
                <Link href="#" className="hover:text-gray-300">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  LinkedIn
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Facebook
                </Link>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold mb-3 text-gray-400">
                Contact Info
              </p>
              <div>
                <a
                  href="mailto:info@gdevelopments.com"
                  className="hover:text-gray-300 block"
                >
                  info@gdevelopments.com
                </a>
                <p className="mt-1">16738</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between sm:items-center border-t sm:border-transparent border-gray-700 pt-6 text-gray-400 text-sm">
        <div className="flex flex-col-reverse md:flex-row sm:items-center gap-4 md:gap-8">
          <p>
            © {new Date().getFullYear()} G Developments. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <p className="mt-4 md:mt-0">Website by Mitch Designs</p>
      </div>
    </footer>
  );
}

export default Footer;
