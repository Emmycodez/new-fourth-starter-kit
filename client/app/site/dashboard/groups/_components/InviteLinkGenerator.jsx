'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { RefreshCw, Copy } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export default function InviteLinkGenerator({ group }) {
  const [inviteLink, setInviteLink] = useState('');
  console.log("This is the group passed to the invitelink generator: ", group);

  const generateInviteLink = () => {
    // Here you would typically make an API call to generate a unique invite link
    const groupSlug = group?.groupName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const newLink = `https://yourdomain.com/join/${groupSlug}-${group.id}/${Math.random().toString(36).substring(7)}`;
    setInviteLink(newLink)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink)
    toast({
      title: "Copied!",
      description: "Invite link copied to clipboard.",
    })
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Invite Link</CardTitle>
        <CardDescription>Generate and share the invite link for this paid group</CardDescription>
      </CardHeader>
      <CardContent>
        {inviteLink ? (
          <div className="p-4 bg-muted rounded-md flex items-center justify-between">
            <span className="text-sm font-mono truncate">{inviteLink}</span>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" onClick={generateInviteLink}>
                <RefreshCw className="h-4 w-4 mr-2" />
                New Link
              </Button>
              <Button size="sm" variant="outline" onClick={copyToClipboard}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={generateInviteLink}>Generate Invite Link</Button>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          This link will direct users to a payment page for your group. You can generate a new link at any time.
        </p>
      </CardFooter>
    </Card>
  )
}

