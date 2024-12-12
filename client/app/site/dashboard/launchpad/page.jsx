import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { telegramj } from "@/images";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { CircleArrowRight, Send } from "lucide-react";
import Link from "next/link";
import CopyButton from "./_components/CopyButton";
import { getMyUser } from "@/actions/queries";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { id, email } = user;
  const data = await getMyUser(id);

  let telegramConnected = data?.telegramConnected;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Launchpad</h1>
      <div className="w-full h-full max-w-[800px] space-y-4">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Let&apos;s get started!</CardTitle>
            <CardDescription>
              Follow the steps below to get your account set up properly
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full h-20 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <Image
                  src={telegramj}
                  alt="Telegram Logo"
                  width={60}
                  height={60}
                  className="rounded-lg object-contain bg-white"
                />
                <p>Connect your Telegram account</p>
              </div>
            </div>

            {!telegramConnected ? (
              <Card className="mx-auto w-full max-w-[500px]">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    TELEGRAM LOGIN
                  </CardTitle>
                  <CardDescription className="text-center">
                    To connect your Telegram account:
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <ol className="list-decimal list-inside mt-2 text-sm">
                    <li>Copy your unique User ID</li>
                    <li>Click the button below</li>
                    <li>Paste the ID when prompted</li>
                  </ol>
                  <CopyButton id={id} />
                  <Button
                    asChild
                    className="font-semibold border-4 border-white bg-blue-300 mt-4"
                    size="lg"
                  >
                    <div className="flex items-center justify-center gap-2 text-md">
                      <Link
                        href={`https://t.me/Groupshepherd_bot?start=uid:${id}`} // Dynamically insert the id here
                        className="flex items-center justify-center gap-2 text-md"
                        target="_blank"
                      >
                        Connect your Telegram Account <Send />
                      </Link>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="mx-auto w-full max-w-[500px]">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    Successfully Connected!
                  </CardTitle>
                  <CardDescription className="text-center">
                    Your Telegram account is now connected. You can now manage
                    your groups and track your earnings.
                  </CardDescription>
                  <CardContent className="flex items-center justify-center w-full">
                    <Button
                      className="font-semibold border-4 border-white bg-green-500"
                      size="lg"
                      asChild
                    >
                      <div>
                        <Link href="/site/dashboard">Go to Dashboard </Link>
                        <CircleArrowRight />
                      </div>
                    </Button>
                  </CardContent>
                </CardHeader>
              </Card>
            )}
          </CardContent>
        </Card>
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Input Your Bank Details</CardTitle>
            <CardDescription>
              Please input the bank account we should send your payments to.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input type="text" placeholder="Account Number" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
