import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const countryCodes = [
  { code: "US", dial: "+1", label: "US" },
  { code: "IN", dial: "+91", label: "IN" },
  { code: "UK", dial: "+44", label: "UK" },
  { code: "AU", dial: "+61", label: "AU" },
  { code: "CA", dial: "+1", label: "CA" },
];

export default function ContactPage() {
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

    if (!formData.agreeToPolicy) {
      toast.error("Please agree to the privacy policy");
      return;
    }

    if (!formData.firstName.trim() || !formData.email.trim()) {
      toast.error("Please fill in required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
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
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Content */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px] mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-8 md:mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back</span>
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

            {/* Privacy Policy Checkbox */}
            {/* <div className="flex items-center justify-center gap-2 py-2">
              <Checkbox
                id="agreeToPolicy"
                checked={formData.agreeToPolicy}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    agreeToPolicy: checked as boolean,
                  }))
                }
                className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
              />
              <label
                htmlFor="agreeToPolicy"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                You agree to our friendly{" "}
                <Link
                  to="/privacy-policy"
                  className="text-foreground underline hover:text-orange-500 transition-colors"
                >
                  privacy policy
                </Link>
                .
              </label>
            </div> */}

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
    </main>
  );
}
