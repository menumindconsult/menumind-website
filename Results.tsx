import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Image
              src="/images/logo.png"
              alt="MenuMind Restaurant Consultancy"
              width={195}
              height={105}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-[13.5px] leading-[1.75] text-offwhite/50">
              Practical restaurant consulting for operators who want
              measurable results: stronger teams, leaner operations, and
              better guest experiences.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-gold-light">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-offwhite/55">
                <li><a href="#services" className="hover:text-gold-light">Services</a></li>
                <li><a href="#about" className="hover:text-gold-light">About</a></li>
                <li><a href="#results" className="hover:text-gold-light">Results</a></li>
                <li><a href="#contact" className="hover:text-gold-light">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-gold-light">
                Contact
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-offwhite/55">
                <li>
                  <a href="mailto:menumind.consult@gmail.com" className="hover:text-gold-light">
                    menumind.consult@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/966540367407"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-gold-light"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-gold-light"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-offwhite/10 pt-7 text-center text-[12px] text-offwhite/40">
          © 2026 MenuMind Restaurant Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
