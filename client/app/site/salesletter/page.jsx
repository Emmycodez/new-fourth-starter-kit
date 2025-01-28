import {
  aniarrow,
  atg,
  checkMark,
  cntg,
  etl,
  gsgs,
  gslp,
  heroImage,
  makerpic,
  sgp,
} from "@/images";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const pointete = [
  "Don’t have 8–12 hours a day to manage a trading academy.",
  "Struggle to market their communities effectively.",
  "Find it hard to keep members engaged.",
  "Want a system that ensures consistent, predictable profits from their students and community.",
];

const thatsWhat = [
  {
    id: 1,
    text: "That's what Netflix does.",
  },
  {
    id: 2,
    text: "That's what Spotify does.",
  },
  {
    id: 3,
    text: "That's what Shopify does That.",
  },
  {
    id: 4,
    text: "That's what Gotv and dstv do.",
  },
  {
    id: 5,
    text: "That's what major multi-billion-dollar enterprises do around the world.",
  },
];

const tasks = [
  { id: 1, text: "Hire staff" },
  { id: 2, text: "Rent expensive office space" },
  { id: 3, text: "Manually monitor unpaid members and kick them out" },
];

const points = [
  {
    id: 1,
    text: "Automatically bills your members’ subscription fees",
  },
  {
    id: 2,
    text: "Automatically removes expired members who refuse to pay",
  },
  {
    id: 3,
    text: "Prevents spamming and link-sharing in your group",
  },
  {
    id: 4,
    text: "Handles affiliate commissions and payments effortlessly",
  },
  {
    id: 5,
    text: "Stores your members’ important data (Name, Email, WhatsApp number, etc.)",
  },
  {
    id: 6,
    text: "Includes engaging activities that keep your group active and irresistible",
  },
];

const page = () => {
  return (
    <main className="bg-gray-100">
      <div className="py-4 px-3 bg-black text-white font-semibold text-center border-b-2 border-b-white">
        With The Click of a Button Turn your Telegram Group into a N125,000/Week
        Profit Machine with.....
      </div>
      <div className="py-4 px-6 md:px-8 border-b-4 border-b-white bg-background">
        <div className="py-4 pt-[20px] px-6 text-center max-w-[900px] mx-auto text-xl md:text-2xl lg:text-3xl font-semibold md:max-w-[1200px]">
          <span className="underline">The Simplest Way To Start</span>{" "}
          <span className="text-blue-400">A Coaching Business On Telegram</span>{" "}
          That Generates Up To
          <span className="underline pl-1 font-bold">
            ₦ 125,000 In Profits Every Single Week
          </span>{" "}
          From Your Trading Academy...
          <div className="m-4">
            WITHOUT
            <span className="font-normal pl-1">
              Ever Writing a single line of code, handling billing or Spam
              prevention and Group Management For EVER!
            </span>
          </div>
        </div>
        <div className="rounded-md text-white bg-blue-400 text-center font-semibold py-4 px-6  md:w-[700px] w-[400px] mx-auto center">
          "We Call It the 'Digital Real Estate Method' and it will Blow Your
          Mind.
        </div>
        <div className="text-center mt-4 italic font-semibold mb-[10px]">
          No Technical Skill or Previous Experience Required.{" "}
          <span className="text-blue-400 pl-1">100% FREE TUTORIAL below.</span>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center min-h-screen">
        <div className="space-y-4 text-left py-6 px-4 bg-gray-100 text-gray-900 leading-7 text-lg max-w-[900px] md:max-w-[1200px]">
          <p className="text-lg font-bold">Hi, </p>
          <p>
            If you're looking for a way to turn your Telegram trading group into
            a profitable trading academy making 100s of thousands of naira every
            single month, then i have one word for you{" "}
            <span className="font-semibold">DIGITAL REAL ESTATE</span>
          </p>{" "}
          <p className="font-bold">
            In case you don't know what the Digital Real estate is, it means
          </p>
          <p className="text-xl font-semibold text-blue-700">
            Having an Asset online that generates monthly recurring revenue for
            you by charging subscription fees for access to that asset
          </p>{" "}
          {thatsWhat.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
          <div
            style={{ color: "#0b3f71" }}
            className="font-semibold mx-auto text-center py-4 px-6 bg-slate-300 text-xl border-dotted border-2 rounded-md shadow-2xl w-[400px] md:w-[700px] self-center mb-[400px]"
          >
            Now I Want To Show You How To Do It Yourself And Make 100s of
            Thousand, Even Millions of Naira Every Month, Doing The Same Thing.
          </div>
          <div className="border-2 border-black py-4 px-6 mt-[100px]">
            <div className="flex items-center justify-center">
              <Image
                src={makerpic}
                alt="Oamen Emmanuel"
                className="rounded-full border-black"
                width={150}
                height={100}
              />
            </div>
            <div className="text-left space-y-4">
              <p>
                My name is Oamen Emmanuel and i am a developer on the
                GroupShepherd team.
              </p>
              <p>
                Over the past few months, we at GroupShepherd have worked hard
                to create a powerful solution for community leaders and
                educators
              </p>
              <p>
                who want to turn their Telegram groups into profitable,
                subscription-based businesses.
              </p>
              <p>
                At GroupShepherd, we specialize in helping you generate
                recurring income
              </p>
              <p>
                without worrying about coding, billing, spam prevention, or
                group management.
              </p>
              <p>
                Our flagship tool, the Digital Real Estate Method, automates
                your subscription model and manages the backend,
              </p>
              <p>
                so you can focus on growing your community and delivering value.
              </p>
              <p>
                Whether you&apos;re a trading coach for Forex, Crypto, educator,
                or content creator,
              </p>
              <p>
                we designed GroupShepherd to make running a profitable business
                on Telegram easier than ever.
              </p>
              <p>
                If you&apos;re ready to transform your Telegram group into a
                profit-generating machine,
              </p>
              <p>
                I&apos;d love to show you how GroupShepherd can make it happen
              </p>
            </div>
          </div>
          <div
            style={{ color: "#0b3f71" }}
            className="text-center text-3xl font-extrabold"
          >
            And Now, It&apos;s Your Turn.
          </div>
          <div>
            If you can read, write, use the internet, and are serious about
            growing your Telegram coaching business, you can make a minimum of
            ₦500,000 every month—
            <span className="underline">CONSISTENTLY.</span>
          </div>
          <div
            style={{ color: "#0b3f71" }}
            className="text-center font-extrabold text-3xl mt-4"
          >
            You Won&apos;t Have To Do 90% of The Work Most Successful Trading
            Academies Do.
          </div>
          <div>
            More on that shortly, but first, here’s a simple example of how you
            could be making at least ₦125,000 per week using our system..
          </div>
          <div className="font-semibold text-red-600 text-center flex flex-col items-center justify-center mb-[40px]">
            LOOK AT THIS COMMUNITY
            <Image src={aniarrow} alt="animated arrow" width={70} height={70} />
            <Image
              src={etl}
              alt="elite trading academy"
              className="rounded-lg shadow-2xl"
              width={500}
              height={500}
            />
          </div>
          <p className="mt-[40px] font-semibold">
            This is a trading academy offering signals and educational content
            to its members.
          </p>
          <p>
            They charge ₦5,000 per month for access to the community and also
            offer a trading course priced at ₦30,000.
          </p>
          <p>
            Using the{" "}
            <span className="font-semibold">DIGITAL REAL ESTATE METHOD</span>,
            they earn <span className="font-semibold">₦6,300,000</span>{" "}
            annually,
          </p>
          <p>
            assuming that just <span className="font-semibold">10% </span>of
            their members purchase the
            <span className="font-semibold pl-1">₦30,000</span> trading course.
          </p>
          <p>Here&apos;s the math:</p>
          <p>₦5,000 x 100 members = ₦500,000 per month</p>
          <p>
            That&apos;s ₦125,000 per week from simply providing signals and
            educational content.
          </p>
          <p>
            This doesn&apos;t even account for referrals! Our system includes an
            inbuilt, automated affiliate program, meaning your community can
            help spread the word and grow your profits.
          </p>
          <p>
            Now, let&apos;s say you&apos;re just starting out, with fewer than
            100 members. That&apos;s okay!
          </p>
          <p>
            Some trading academies have thousands of members, but starting small
            is perfectly fine.
          </p>
          <p>For example, in your first month, you get just 10 members.</p>
          <p>₦5,000 x 10 members = ₦50,000 per month</p>
          <p>
            For 12 months, that&apos;s ₦600,000 in annual revenue—
            <span className="text-blue-500">₦52,500 per month</span>.
          </p>
          <p>
            If even one person purchases your ₦30,000 trading course or
            one-on-one mentorship, that&apos;s another ₦30,000 added to your
            total.
          </p>
          <p>
            In this worst-case scenario, you&apos;re already looking at{" "}
            <span className="text-blue-500">₦630,000</span> in annual revenue
            from just 10 members.
          </p>
          <p>And this is just the beginning!</p>
          <div
            style={{ backgroundColor: "#0b3f71" }}
            className="font-bold text-center text-white py-4 px-6 rounded-lg text-xl"
          >
            Surely, you wouldn&apos;t mind an extra ₦500,000 every month, Would
            You?
          </div>
          <p>Especially if you have loved ones to take care of,</p>
          <p>
            Now, remember how I said you won&apos;t have to work as hard as most
            successful trading academies? Here&apos;s what I mean.
          </p>
          <p>
            The business model I&apos;m introducing you to is built around an
            efficient system that:
          </p>
          {points.map((point) => (
            <div className="flex items-start justify-start" key={point.id}>
              {/* <CircleCheck className="text-background text-lg"/> */}
              <Image src={checkMark} alt="check mark" width={20} height={20} />
              <p key={point.id} className="pl-2">
                {point.text}
              </p>
            </div>
          ))}
          <div className="bg-gray-800 text-white py-4 px-6 space-y-4">
            <p>All of this happens while you’re asleep or offline.</p>
            <p>
              {" "}
              Here&apos;s what most successful trading communities on Telegram
              have to deal with:{" "}
            </p>
            <p>To make it work, they have to:</p>
            {tasks.map((task) => (
              <div className="flex items-start justify-start" key={task.id}>
                <Image
                  src={checkMark}
                  alt="check mark"
                  width={20}
                  height={20}
                />
                <p key={task.id} className="pl-1">
                  {task.text}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <p>
              Because of human error, they often fail to catch freeloaders who
              sneak into their communities.
            </p>
            <p>
              This results in additional costs and a huge time investment. They
              have to outsource 80%-90% of the work, which allows them to focus
              on other things while still making good money.
            </p>
            <p>
              But with GroupShepherd&apos;s Digital Real Estate Method, you can
              achieve the same level of success—without all the hassle.
            </p>
            <p>
              You can make up to ₦125,000 per week—and actually, a lot
              more—without doing any of the work they do.
            </p>
            <p className="font-bold text-2xl text-center ">
              We&apos;ve Done 90% Of The <br /> Work For You
            </p>
            <p>And the other 10%?</p>
            <p>It requires just 1 hour of focused effort every day.</p>
            <p>
              And it&apos;s as simple as setting up your community and letting
              GroupShepherd do the rest.
            </p>
            <p>
              But here&apos;s the best part: with GroupShepherd, you&apos;ll
              generate enough recurring income to take care of yourself and your
              loved ones—without spending countless hours managing your
              community.
            </p>
            <p>So, what does that 10% look like?</p>
            <p>I&apos;ll tell you in a second.</p>
            <p>
              But first, let me share a little about the business model that
              powers GroupShepherd.
            </p>
            <p className="font-bold text-3xl text-red-600">I call it…</p>
          </div>
          <div className="space-y-4 leading-7 bg-blue-300 py-4 px-6">
            <div>
              <p className="font-bold text-center text-3xl">
                The DIGITAL REAL ESTATE METHOD.
              </p>
            </div>
            <p>
              This is the most efficient, automated, and profitable business
              model we&apos;ve created after years of working with community
              leaders and content creators.
            </p>
            <p>Here&apos;s why it works so well:</p>
            <p>
              After working with countless Telegram community owners, I realized
              something crucial:
            </p>
            <p>
              Not everyone has the time to manage every aspect of their
              community full-time.
            </p>
            <p>
              Many coaches and educators want a simple way to earn money while
              focusing on what they do best—delivering value to their members.
            </p>
            <p>
              The problem is, most systems are overly complex and require
              endless hours of manual work.
            </p>
            <p>
              But with <span className="font-bold">GroupShepherd</span>,
              I&apos;ve eliminated all that.
            </p>
            <p>
              we&apos;ve built a system that automates 90% of the work—leaving
              you to focus on growing your community, engaging your members, and
              making money.
            </p>
            <p>
              <span className="font-bold">GroupShepherd</span> handles
              everything from billing and spam prevention to affiliate
              commissions, saving you time and headache
            </p>
            <p></p>
          </div>
          <div className="py-4 px-6 space-y-4">
            <p className="font-bold text-3xl text-center">
              If You&apos;ve Ever Tried To Make Money From Teaching Your Trading
              Expertise Without Succeeding
            </p>{" "}
            <p>Then you know this is a very frustrating place to be.</p>
            <p>
              Spending hours trying to market your community, attract members,
              keep them engaged, and turn your expertise into consistent profits
              can leave you burned out—before you even make your first
              breakthrough.
            </p>
            <p>
              That&apos;s why we decided to create a business model specifically
              for traders who:
            </p>
            <div className="space-y-3">
              {pointete.map((point, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <p className="underline text-transfrom:upppercase text-3xl font-semibold text-blue-600">
              In short, we&apos;ve designed a solution that does all the HARD
              WORK for you.
            </p>
          </div>
          <div className="bg-blue-700 py-6 px-8">
            <div className="p-2 bg-blue-400">
              <p className="text-3xl font-bold text-center">
                Here&apos;s What You Get With
              </p>
            </div>
            <div className="space-y-3 py-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 rounded-full bg-white p-2">
                    ✔️
                  </span>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <p>And here&apos;s the best part:</p>
          <p>You don&apos;t need to worry about any of the technicalities.</p>
          <div className="space-y-4 leading-7">
            <div className="text-2xl lg:text-3xl font-semibold text-center">
              Now, I Can Almost Hear What You&apos;re Thinking…
            </div>
          </div>
          <p>“So, if all of this is already in place, where do I come in?” </p>{" "}
          <p className="font-bold">
            What&apos;s the 10% of work I&apos;ll be doing?
          </p>
          <p>I&apos;ll tell you—it&apos;s incredibly simple.</p>
          <p>With GroupShepherd, your role is just to:</p>
          <div className="space-y-3">
            {communitySetupSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✔️</span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
          <p>The rest? It&apos;s all handled for you.</p>
          <p>
            We&apos;ve created an efficient, low-maintenance business model that
            allows you to focus on sharing your expertise while we take care of
            the operations.
          </p>
        </div>
        <div className="mt-4 py-4 px-6 text-gray-900 ">
          <div className="text-4xl font-bold text-center underline">
            Here's How It Works.....
          </div>
          <p className="mt-5 font-semibold text-md">
            Heres how your dashboard will look....
          </p>
          <div className="mt-5 border-2 border-dashed border-blue-300 py-4 px-6">
            <Image src={heroImage} alt="dashboard Image" />
          </div>
          <div className="space-y-6">
            {stepsWithImages.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md"
              >
                <Image
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  width={700}
                  height={700}
                />
                <div className="flex items-start py-4">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700 text-lg">{step.text}</span>
                </div>
              </div>
            ))}
            <p>
              With these simple steps, you could start making at least{" "}
              <span className="font-bold pr-1">₦125,000</span>
              or more every week.
            </p>
            <p>No hassles, no stress, no technical worries.</p>
            <p>
              Like I said before, all the hard work is already done for you.
            </p>
            <div className="leading-7 space-y-4">
              <div
                className="text-center text-white font-bold text-3xl py-4 px-6 rounded-md"
                style={{ backgroundColor: "#0b3f71" }}
              >
                High-Value, High-Demand Solution That Practically Markets Itself
              </div>
              <p>
                One of the biggest advantages of paid community management with
                Group Shepherd is that people already recognize the value of
                being part of exclusive, well-managed groups.
              </p>
              <p>Think about it:</p>
              <p>
                If someone is part of a thriving Telegram group where they gain
                valuable insights, exclusive content, or business opportunities,
                they&apos;re already motivated to stay in that group.
              </p>
              <p>
                The challenge isn&apos;t convincing them to join but ensuring
                they remain part of the group while contributing their fair
                share.
              </p>
              <p>And here&apos;s the best part:</p>
              <p>
                You don&apos;t need to manage group payments manually or chase
                members for subscriptions.
              </p>
              <p>Group Shepherd automates all of that for you.</p>
              <p>
                Let&apos;s compare it to other digital solutions: With typical
                digital products—courses, mentorship, ebooks, etc.—you often
                need to:
              </p>
              <p>Convince people why they need your trading.</p>
              <p>Prove the value of your specific knowledge.</p>
              <p>Build trust so they feel safe making a purchase.</p>
              <p>
                With Group Shepherd, people already know the value of your
                community. All you need to do is set up the system to ensure
                they pay for access — and let Group Shepherd handle the rest.
              </p>
              <p className="font-semibold">
                You are marketing signal results and not potential benefits.
              </p>
            </div>
            <div className="bg-gray-800 text-white ">
              <div className="text-center text-3xl font-bold"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const features = [
  "We’ve automated your subscription management: Members are billed automatically, and those who don’t pay are removed from your group without you lifting a finger.",
  "Spam-proof your group: No more fliers, links, or irrelevant content distracting your members.",
  "Keep track of your members' data: Names, emails, and phone numbers are securely stored for you.",
  "Drive retention with irresistible group activities: Make your community so valuable that your members will never want to leave.",
  "Create recurring revenue effortlessly: Get paid every month without manual follow-ups or reminders.",
];

const communitySetupSteps = [
  "Set up your community with a few clicks.",
  "Add your group members and let the system take over.",
  "Engage with your members for just 1 hour a day.",
];

const stepsWithImages = [
  {
    text: "Step 1: You log into your GroupShepherd account (which we’ll open for you today if you join us).",
    image: gslp, // Replace with your image URL
  },
  {
    text: "Step 2: Connect your Telegram account.",
    image: cntg, // Replace with your image URL
  },
  {
    text: "Step 3: Add GroupShepherd to your Telegram Group.",
    image: atg, // Replace with your image URL
  },
  {
    text: "Step 4: Set your payment settings. Set how much you want your members to pay for on a monthly or yearly basis. For example, you can have a N5000 a month or a N50000 to make people pay more upfront to get two months for free.",
    image: sgp, // Replace with your image URL
  },
  {
    text: "Step 5: Start receiving your payments.",
    image: gsgs, // Replace with your image URL
  },
];
export default page;
