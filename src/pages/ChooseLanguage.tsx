
import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const LANGUAGES = [
  {
    name: "English",
    code: "en",
    flag: "🇺🇸",
  },
  {
    name: "Tiếng Việt",
    code: "vi",
    flag: "/lovable-uploads/feab4785-d74b-4b6b-8f95-3bf9d2647020.png", // Vietnam flag img
  },
  {
    name: "한국어",
    code: "ko",
    flag: "🇰🇷",
  },
  {
    name: "简体中文",
    code: "zh",
    flag: "🇨🇳",
  },
];

export default function ChooseLanguage() {
  // Hardcode English as selected (index 0)
  const [selected, setSelected] = useState("en");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
      <Card className="w-[350px] rounded-xl p-6">
        {/* New: Add global language heading */}
        <div className="mb-2">
          <h1 className="text-[20px] font-bold text-center text-gray-900">All Over The World Languages</h1>
        </div>
        <h2 className="mb-4 text-[17px] font-medium text-gray-800 text-center">Choose your language</h2>
        <div className="space-y-2">
          {LANGUAGES.map((lang, idx) => (
            <button
              key={lang.code}
              className={`flex items-center w-full py-3 px-4 rounded-lg border text-left transition ${
                selected === lang.code
                  ? "border-gray-400 bg-gray-50"
                  : "border border-gray-200 bg-white hover:border-gray-300"
              }`}
              style={{
                // Only English has the circle check, others get a hollow circle outline
                boxShadow:
                  selected === lang.code
                    ? "0 0 0 2px #a3a3a3"
                    : undefined,
              }}
              onClick={() => setSelected(lang.code)}
              type="button"
            >
              {/* Flag */}
              {lang.flag.startsWith("/") ? (
                <img
                  src={lang.flag}
                  alt={lang.name + " flag"}
                  className="w-7 h-7 rounded object-cover mr-3 flex-shrink-0"
                />
              ) : (
                <span className="text-2xl mr-3 w-7 h-7 flex items-center justify-center">
                  {lang.flag}
                </span>
              )}
              {/* Name */}
              <span className="flex-1 text-base text-gray-900 font-medium">{lang.name}</span>
              {/* Check icon */}
              {selected === lang.code ? (
                <Check className="text-[#20c96b] ml-2" />
              ) : (
                <span className="ml-2 inline-flex items-center">
                  <svg width="22" height="22" fill="none" stroke="#bbb">
                    <circle
                      cx="11"
                      cy="11"
                      r="9"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}

