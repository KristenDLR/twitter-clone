'use client'
import { Button } from '@components/ui/button';
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle } from '@components/ui/dialog';
import { useEffect, useState } from 'react';
import { IoLogoTwitter } from 'react-icons/io';

interface AuthOverlayProps {
  user: any; // Adjust this type according to your session object
}

export default function AuthOverlay({ user }: AuthOverlayProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open the dialog if there is no user
    if (!user) {
      // setOpen(true);
      setOpen(false)
    } else {
      // setOpen(false);
      setOpen(true)
    }
  }, [user]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="bg-slate/10 backdrop-blur-xs fixed inset-0 z-50" />
        <DialogContent
          className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black p-8 shadow-lg focus:outline-none border border-gray-700"
        >

          {/* Twitter Logo */}
          <DialogTitle>
            <div className="flex justify-center">
              <IoLogoTwitter className="w-12 h-12 fill-blue-500" />
            </div>

          </DialogTitle>


          <h1 className="text-center text-white text-lg font-semibold mb-2">
            See more Tweets from
          </h1>
          {/* TODO: placeholder, replace with data */}
          <p className="text-center text-white font-bold mb-4">
            CyclingMikey tired of road crime. 🌐 🇿🇼 🇪🇸
          </p>

          <p className="text-center text-sm text-gray-400 mb-6">
            When you log in you'll be able to see every Tweet from
            CyclingMikey tired of road crime. 🌐 🇿🇼 🇪🇸
          </p>

          <div className="flex flex-col gap-4">
            <Button
              className="w-full bg-white text-black font-semibold rounded-full hover:bg-gray-200"
              onClick={() => window.location.href = '/auth'} // Your login route
            >
              Log in
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
