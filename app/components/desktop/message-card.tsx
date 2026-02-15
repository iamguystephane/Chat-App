import profileImg from "../../assets/images/AI-creation.jpg";
import Image from "next/image";

const MessageCard = () => {
  return (
    <div className="mt-3">
      <div className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm group">
        <div className="relative flex-shrink-0">
          <Image
            src={profileImg}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-semibold text-gray-900 truncate">
              Guy Stephane :)
            </h4>
            <span className="text-xs font-medium text-purple-500 flex-shrink-0 ml-2">
              8:30
            </span>
          </div>
          <p className="text-sm text-gray-500 truncate">
            Please don&apos;t forget to send...
          </p>
        </div>

        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
