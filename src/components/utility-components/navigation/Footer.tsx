import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-neutral-950 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-700 dark:text-gray-200"
            >
              <Image
                src="/surge-bolt-logo.jpg"
                width={60}
                height={60}
                alt="app logo"
                className="rounded border-b-[0.02px] border-gray-700"
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            {/* Link Group 1 */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/workouts" className="hover:underline">
                    Workouts
                  </Link>
                </li>
                <li>
                  <Link href="/diet" className="hover:underline">
                    Diet Plans
                  </Link>
                </li>
                <li>
                  <Link href="/progress" className="hover:underline">
                    Progress Tracker
                  </Link>
                </li>
              </ul>
            </div>

            {/* Link Group 2 */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} FitLife Tracker. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
