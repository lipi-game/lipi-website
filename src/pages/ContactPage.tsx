import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useSEO } from "@/shared/hooks/useSEO";

const countryCodes = [
  { code: "US", dial: "+1", label: "US" },
  { code: "IN", dial: "+91", label: "IN" },
  { code: "UK", dial: "+44", label: "UK" },
  { code: "AU", dial: "+61", label: "AU" },
  { code: "CA", dial: "+1", label: "CA" },
];

const dialByCode = Object.fromEntries(
  countryCodes.map((c) => [c.code, c.dial])
);


export default function ContactPage() {

  useSEO({
    title: "Contact | Lipi Inc",
    description:
      "Contact Lipi Inc for support, or feedback on our epic-inspired learning and word games. We welcome suggestions, collaboration ideas, and content corrections to help us improve.",
    canonical: `https://lipiinc.com/contact`,
  });


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "US",
    phone: "",
    message: "",
    agreeToPolicy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string;

    if (!CONTACT_API_URL) {
      toast.error("Contact API URL missing");
      return;
    }

    if (!formData.firstName.trim() || !formData.email.trim()) {
      toast.error("Please fill in required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const dial = dialByCode[formData.countryCode] ?? ""; // "+91"
      const number = String(formData.phone || "").replace(/[^\d]/g, ""); // digits only
      const fullPhone = `${dial} ${number}`.trim(); // "+91 7010101010"
 

      const body = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: fullPhone,
        message: formData.message,
      });

      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || json?.success !== true) {
        throw new Error(json?.error || `Request failed (${res.status})`);
      }

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "US",
        phone: "",
        message: "",
        agreeToPolicy: false,
      });
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">

      {/* Content */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px] mx-auto pt-8">
          <div className="bg-white ring-1 ring-black rounded-2xl shadow-sm p-6 sm:p-8">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-8 md:mb-12 bg-black/5 hover:bg-black/8 backdrop-blur-md ring-1 ring-black/10 shadow-sm rounded-full px-4 py-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-semibold">Back</span>
          </button>


          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <span className="text-orange-500 text-sm font-medium mb-3 block">
              Contact us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Get in touch
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              We'd love to hear from you. Please fill out this form.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-foreground"
                >
                  First name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-foreground"
                >
                  Last name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                Phone number
              </label>
              <div className="flex">
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, countryCode: value }))
                  }
                >
                  <SelectTrigger className="w-[80px] h-11 rounded-r-none border-r-0 border-gray-300 focus:ring-orange-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-11 rounded-l-none border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder=""
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-[#118fdd] hover:bg-[#118fdd]/90 text-white font-medium text-base rounded-lg transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
          </div>
        </div>
      </div>

    </main>
  );
}
