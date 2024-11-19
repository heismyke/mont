import { FileVideo, Users, Mail, Crown, CopyIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-sm text-gray-600">
    <div className="w-4 h-4 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
    </div>
    {children}
  </div>
);

interface PaymentPromptDialogProps {
  isOpen: boolean;
  form_link: string;
  onClose: () => void;
}

export const PaymentPromptDialog = ({
  isOpen,
  onClose,
  form_link,
}: PaymentPromptDialogProps) => {
  const { toast } = useToast();

  const handleTestLink = async () => {
    await navigator.clipboard.writeText(`${form_link}`);
    toast({
      title: "🎉 Share away!",
      description:
        "Form link copied to clipboard, now share to get those videos rolling in!",
    });

    // onClose();
  };

  const handleContactTeam = () => {
    const userId = "chukwuemeka0889";
    const message = encodeURIComponent(
      "Hi! 👋 I'm interested in getting unlimited video responses for my form. Can you help me set this up?"
    );

    const discordUrl = `discord://discordapp.com/users/${userId}?message=${message}`;
    window.location.href = discordUrl;

    // Fallback to web version after a short delay
    setTimeout(() => {
      const webUrl = `https://discord.com/users/${userId}?message=${message}`;
      window.open(webUrl, "_blank");
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-800">
            🎉 Congratulations! Your Form is Ready
          </DialogTitle>
          <p className="text-center text-gray-500 mt-2 text-sm">
            Share your form to start collecting video feedback
          </p>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 py-6">
          {/* Free Plan Card */}
          <Card className="border-2 hover:border-purple-500 transition-all flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Trial Link
                </CardTitle>
                <CardDescription>Perfect for instant setup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <FeatureItem>Up to 10 video responses</FeatureItem>
                <FeatureItem>All form features</FeatureItem>
                <FeatureItem>No support</FeatureItem>
              </CardContent>
            </div>
            <CardFooter>
              <Button
                className="w-full"
                variant="outline"
                size={"lg"}
                onClick={handleTestLink}
              >
                <CopyIcon className="w-4 h-4 mr-2" />
                Copy link
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan Card */}
          <Card className="border-2 border-purple-500 bg-purple-50/50 relative">
            <div className="absolute -top-3 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Recommended
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Contact Team
              </CardTitle>
              <CardDescription>Set up in less than 10 minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <FeatureItem>
                <FileVideo className="w-5 h-5 text-purple-500" />
                Unlimited video responses
              </FeatureItem>
              <FeatureItem>
                <Crown className="w-5 h-5 text-purple-500" />
                Unlimited forms
              </FeatureItem>
              <FeatureItem>
                <FileVideo className="w-5 h-5 text-purple-500" />
                Event montage & reels
              </FeatureItem>
              <FeatureItem>
                <Mail className="w-5 h-5 text-purple-500" />
                Export responders email list
              </FeatureItem>
              <FeatureItem>
                <Users className="w-5 h-5 text-purple-500" />
                Priority support
              </FeatureItem>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-purple-500 hover:bg-purple-600"
                onClick={handleContactTeam}
                size={"lg"}
              >
                Contact Team
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentPromptDialog;
