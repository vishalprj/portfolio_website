import type { NextComponentType } from 'next';
import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub, AiOutlineTwitter, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';

export const Experience: NextComponentType = () => (
  <div className="my-16 px-3 font-sen ctx" id="experience">
    <p className="text-3xl font-bold dark:text-white mb-8">Experience</p>
    <div className="flex flex-wrap sm:flex-nowrap	 relative border-l border-l-gray-600 px-4 py-2  border-gray-400">
      <span className="w-2 h-2 bg-gray-600 -left-1 rounded-full absolute top-1/2 -translate-y-1/2" />
      <a
        href="https://setu.co"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-none hover:shadow-none text-foreground"
        aria-label="setu-logo"
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 350"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html: '.cls-1{fill:#20014b;}.cls-2{fill:#42cacd;}',
              }}
            />
          </defs>
          <path
            id="Path_176"
            data-name="Path 176"
            className="cls-1"
            d="M175,350A175,175,0,1,0,0,175,175,175,0,0,0,175,350"
          />
          <g id="Group_20" data-name="Group 20">
            <path
              id="Path_177"
              data-name="Path 177"
              className="cls-2"
              d="M231,235H115V224H230.94a5.85,5.85,0,0,1,5.64,5.64,5.62,5.62,0,0,1-5.64,5.36"
            />
            <path
              id="Path_178"
              data-name="Path 178"
              className="cls-2"
              d="M220,257H115V246H219.89a5.62,5.62,0,0,1,5.37,5.64,5.38,5.38,0,0,1-5.37,5.36"
            />
            <path
              id="Path_179"
              data-name="Path 179"
              className="cls-2"
              d="M231.07,93a5.39,5.39,0,0,1,5.37,5.37,5.62,5.62,0,0,1-5.37,5.63H126V93Z"
            />
            <path
              id="Path_180"
              data-name="Path 180"
              className="cls-2"
              d="M231.08,115a5.38,5.38,0,0,1,5.37,5.36,5.63,5.63,0,0,1-5.37,5.64H115V115Z"
            />
            <path
              id="Path_181"
              data-name="Path 181"
              className="cls-2"
              d="M153.29,137a5.86,5.86,0,0,1,5.64,5.64,5.62,5.62,0,0,1-5.64,5.36H104V137Z"
            />
            <path
              id="Path_182"
              data-name="Path 182"
              className="cls-2"
              d="M240.69,202a5.85,5.85,0,0,1,5.64,5.63,5.63,5.63,0,0,1-5.64,5.37H191V202Z"
            />
            <path
              id="Path_183"
              data-name="Path 183"
              className="cls-2"
              d="M219.9,159a5.38,5.38,0,0,1,5.36,5.36A5.6,5.6,0,0,1,219.9,170H115V159Z"
            />
            <path
              id="Path_184"
              data-name="Path 184"
              className="cls-2"
              d="M231,191H126V180H231.15a5.61,5.61,0,0,1,5.36,5.64,5.38,5.38,0,0,1-5.36,5.36"
            />
          </g>
        </svg>
      </a>
      <div className="w-full ml-2 sm:ml-4 ">
        <p className="my-0 text-foreground font-bold text-xl">
          Frontend intern
        </p>
        <p className="my-0 text-lg font-bold">Setu</p>
        <p className="my-0 text-sm  dark:text-gray-300 text-gray-500">
          Dec 2023 - July 2024
        </p>
        <ul className="work dark:text-gray-400 text-gray-600">
          <li>
            Contributed to Bridge by developing UI screens for onboarding with
            API integration, monitoring the platform, adding features, and
            implementing design updates, collaborating with cross-functional
            teams.
          </li>
          <li>
            Designed and developed responsive, interactive UI components for
            account aggregation using Next.js and TypeScript.
          </li>
          <li>
            Created comprehensive unit tests for various components, enhancing
            code reliability and quality through testing frameworks.
          </li>
        </ul>
        <ul className="work dark:text-gray-400 text-gray-600">
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tech Stack:
            </span>
            &nbsp; NextJS, Typescript, styled-components
          </li>
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tools:
            </span>
            &nbsp; Figma, Jira
          </li>
        </ul>
      </div>
    </div>
  </div>
);
