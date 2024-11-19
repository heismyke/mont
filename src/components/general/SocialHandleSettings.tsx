import { useFormContext } from "@/context/FormContext";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const SocialHandleSettings = () => {
  const { formState, updateFormState } = useFormContext();
  const { socialHandle } = formState;

  const handleProfileUpdate = (field: string, value: string | number) => {
    updateFormState("socialHandle", {
      ...socialHandle,
      profile: {
        ...socialHandle.profile,
        [field]: value,
      },
    });
  };

  const handleTweetUpdate = (index: number, field: string, value: unknown) => {
    const updatedTweets = [...socialHandle.tweets];
    updatedTweets[index] = {
      ...updatedTweets[index],
      [field]: value,
    };

    updateFormState("socialHandle", {
      ...socialHandle,
      tweets: updatedTweets,
    });
  };

  const addNewTweet = () => {
    updateFormState("socialHandle", {
      ...socialHandle,
      tweets: [
        ...socialHandle.tweets,
        {
          id: Date.now().toString(),
          content: "",
          videoUrl: "",
          likes: 0,
          retweets: 0,
          replies: 0,
          timestamp: "now",
        },
      ],
    });
  };

  const removeTweet = (index: number) => {
    const updatedTweets = socialHandle.tweets.filter((_, i) => i !== index);
    updateFormState("socialHandle", {
      ...socialHandle,
      tweets: updatedTweets,
    });
  };

  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <div className="space-y-4">
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Profile Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={socialHandle.profile.name}
              onChange={(e) => handleProfileUpdate("name", e.target.value)}
              placeholder="e.g. Mont Protocol"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Handle</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">@</span>
              <input
                type="text"
                className="w-full px-3 py-2 pl-7 border border-gray-300 rounded-md text-sm"
                value={socialHandle.profile.handle}
                onChange={(e) => handleProfileUpdate("handle", e.target.value)}
                placeholder="handle"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Following
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={socialHandle.profile.following}
                onChange={(e) =>
                  handleProfileUpdate(
                    "following",
                    parseInt(e.target.value) || 0
                  )
                }
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Followers
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={socialHandle.profile.followers}
                onChange={(e) =>
                  handleProfileUpdate(
                    "followers",
                    parseInt(e.target.value) || 0
                  )
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Bio</label>
            <Textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={socialHandle.profile.bio}
              onChange={(e) => handleProfileUpdate("bio", e.target.value)}
              placeholder="Enter your profile bio"
            />
          </div>
        </div>
      </div>

      {/* Tweets Settings */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">Tweets</h3>
          <Button
            onClick={addNewTweet}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Tweet
          </Button>
        </div>

        <div className="space-y-6">
          {socialHandle.tweets.map((tweet, index) => (
            <div
              key={tweet.id}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-medium">Tweet {index + 1}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeTweet(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Content
                </label>
                <Textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  value={tweet.content}
                  onChange={(e) =>
                    handleTweetUpdate(index, "content", e.target.value)
                  }
                  placeholder="Enter tweet content"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Video URL
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  value={tweet.videoUrl}
                  onChange={(e) =>
                    handleTweetUpdate(index, "videoUrl", e.target.value)
                  }
                  placeholder="/path/to/video.mp4"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Likes
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={tweet.likes}
                    onChange={(e) =>
                      handleTweetUpdate(
                        index,
                        "likes",
                        parseInt(e.target.value) || 0
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Retweets
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={tweet.retweets}
                    onChange={(e) =>
                      handleTweetUpdate(
                        index,
                        "retweets",
                        parseInt(e.target.value) || 0
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Replies
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={tweet.replies}
                    onChange={(e) =>
                      handleTweetUpdate(
                        index,
                        "replies",
                        parseInt(e.target.value) || 0
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialHandleSettings;
