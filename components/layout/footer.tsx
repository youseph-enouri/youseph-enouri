import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        Website by{" "}
          <span className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline">Kayne Lee</span>
      </p>
      <a
        href="mailto:kayne.lee@queensu.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffee className="h-6 w-6" />
        <p className="font-medium text-gray-600">Buy me a coffee</p>
      </a>
    </div>
  );
}
