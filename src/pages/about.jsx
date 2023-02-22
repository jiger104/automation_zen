import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={'_blank'}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jigar Patel</title>
        <meta
          name="description"
          content="I’m Jigar Patel. A software engineer from Austin, TX"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jigar Patel. I live in Austin, TX with my wife Hanisha, and I
              help software eat the world.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <p>
                My first ever computer was a 256mhz Gateway 2000 with 128mb of
                ram running Windows 95. My father purchased it for us without
                having really used a computer previously, but having seen that
                many people he knew were buying computers for home use at that
                time, it sounded like a good idea.
              </p>
              <p>
                These were the nascent days of Web 1.0, with the typical path to
                the internet via a walled garden experience provided by AOL or
                Compuserve. Today, we might consider it a fairly limiting
                experience but given how small the overall footprint of the
                internet was at that time, it felt magical. There was no
                Wikipedia but Microsoft Encarta was a good standby, and
                effectively no social-media but anyone could make a Geocities
                page. Your own little corner of the internet was available to
                anyone, pursuant to a little bit of knowledge in html!
              </p>
              <p>
                As a precocious and curious kid, I eventually got interested in
                games and as a not particularly good gamer, that led to an
                interest in reverse engineering games. Being a good reverse
                engineer, has a dependency on knowing how to code to a certain
                degree. After all, one has to work backwards to reverse
                engineer, examine the output, infer the input or more
                specifically, the logic to how the output was derived.
              </p>
              <p>
                The ideal opportunity to learn came during a science fair when I
                was around 12. Instead of your bog-standard baking soda, vinegar
                pseudo-volcano, I decided to submit a computer program. Dynamic
                languages weren't as popular back then and given most games were
                written C or C++, I decided to pick up a book on C and try my
                hand at writing a basic grocery tabulator. To win a science fair
                it helps that no one else makes a submission in your category
                and it turns out no other middle-schooler had made a submission
                in the computer science category.
              </p>
              <p>
                Such began a deep interest in technology and computing. I took a
                few detours along the way, but ultimately my curiosity,
                resourcefullness and persistence has helped numerous startups
                and SMBs focus on the things that matter, growing their business
                and generating revenue.{' '}
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/jiger104"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/~jigar"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jigar@automationzen.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jigar@automationzen.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
