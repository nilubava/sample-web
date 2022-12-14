import cx from "clsx"
import Link from "next/link"
import React from "react"
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants"

const Navigation = () => {
  return (
    <div className="container px-4 mx-auto mt-4 mb-10 lg:mt-8 lg:mb-20">
      <div className="lg:flex lg:items-center lg:justify-between">
        <Link href="/">
          <a
            className={cx(
              "font-medium tracking-wider transition-colors text-gray-700 hover:text-gray-900 focus:text-gray-900 uppercase rounded-sm",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            Nilufar Bava
          </a>
        </Link>

        <div className="flex flex-wrap -ml-5 text-gray-700 lg:-ml-8">
          <Link href="/#about">
            <a
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-gray-900 focus:text-gray-900 rounded",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              About
            </a>
          </Link>

          <Link href="/#skills">
            <a
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-gray-900 focus:text-gray-900 rounded",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              Skills
            </a>
          </Link>

          <Link href="/#contact">
            <a
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-gray-900 focus:text-gray-900 rounded",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation