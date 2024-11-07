"use client";

import React from 'react';
import { useUser } from '@/providers/UserProvider';
import { Card, CardTitle, CardDescription, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { QrCode } from 'lucide-react';
import { usePathname } from 'next/navigation';

const ConnectedCheck = ({ children }) => {
  const{user, loading}= useUser();
  const pathname = usePathname();

  if ( loading) return null;

  return (
    <div className="relative h-full">
      {children}
      {/* Show overlay card if user is not connected */}
      {!user?.connectedWhatsapp && pathname !== '/site/dashboard/launchpad' &&(
        <div className="absolute inset-0 z-30 flex items-center justify-center backdrop-blur-sm bg-background/50">
          <Card className="animate-bounce">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">
                Connect your WhatsApp account
              </CardTitle>
              <CardDescription className="text-center text-lg mb-5">
                You need to connect your WhatsApp account to make full use of
                this app
              </CardDescription>
              <Link
                href="/site/dashboard/launchpad"
                className="p-2 w-fit bg-secondary text-white rounded-md flex items-center gap-2 self-center"
              >
                <QrCode size={24} />
                Connect your WhatsApp
              </Link>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ConnectedCheck;
