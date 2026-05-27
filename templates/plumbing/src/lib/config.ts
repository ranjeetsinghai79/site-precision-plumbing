import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Precision Plumbing LLC",
    tagline: "Fastest Plumbing Fleet In Town",
    phone: "(702) 253-6363",
    phoneHref: "tel:+17022536363",
    email: "info@precisionplumbing.com",
    address: "123 Main St",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "Las Vegas Valley"],
    license: "NV Lic. #000000",
    since: "1998",
    google_rating: "4.8",
    review_count: "2,144",
    emergency: true,
    theme: "ocean",
    niche: "plumbing",
  },

  services: [
    { icon: "wrench", title: "Full Service Plumbing", desc: "Comprehensive plumbing solutions for all your home and business needs.", urgent: false },
    { icon: "thermometer", title: "Water Heater Services", desc: "Expert repair, replacement, and installation for all types of water heaters.", urgent: false },
    { icon: "droplets", title: "Leak & Break Repair", desc: "Rapid detection and repair of leaks to prevent water damage and waste.", urgent: true },
    { icon: "zap", title: "Clogged Drain Clearing", desc: "Professional drain cleaning to remove stubborn clogs and restore flow.", urgent: true },
    { icon: "truck", title: "Emergency Plumbing", desc: "24/7 rapid response for all urgent plumbing situations.", urgent: true },
    { icon: "home", title: "Sewer & Drain Work", desc: "Complete sewer and drain services, including inspection, repair, and replacement.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Henderson", stars: 5, text: "Precision Plumbing saved the day! Our water heater burst on a Saturday morning, and they had a technician out within an hour. He was incredibly professional, explained all our options clearly, and had a new unit installed by lunchtime. The upfront pricing was a huge relief, and we even got a discount for their 'On-Time Guarantee'. Highly recommend their prompt and reliable service!" },
    { name: "David L.", location: "Summerlin", stars: 5, text: "We had a persistent slow drain in our kitchen sink that other companies couldn't fix. Precision Plumbing used their video inspection service, found the root cause, and cleared it with hydro jetting. The technician was thorough, friendly, and left the area spotless. It's been weeks, and the drain is still flowing perfectly. Fantastic job!" },
    { name: "Emily R.", location: "North Las Vegas", stars: 5, text: "I called Precision Plumbing for a leaky faucet, and they were able to schedule me for the same day. The plumber arrived exactly when promised, quickly diagnosed the issue, and had it fixed in no time. He was courteous and efficient. I appreciate their transparent pricing and the peace of mind knowing the job was done right. Will definitely use them again for any future plumbing needs." }
  ],

  trustBadges: [
    "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Upfront Pricing", "Precision Plumbing On-Time Guarantee", "Flexible Financing Available"
  ],

  stats: [
    { value: 4.8, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 2100, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 25, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "Our large fleet ensures the fastest plumbing service in town, getting to you quickly when you need us most." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, honest pricing before any work begins, so you know exactly what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, certified, and committed to delivering top-quality workmanship on every job." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction. Your peace of mind is our priority." },
    { icon: "phone", title: "24/7 Emergency Service", desc: "Plumbing emergencies don't wait, and neither do we. Our team is ready to respond day or night, weekends and holidays." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are fully stocked with the latest tools and parts to handle most repairs on the first visit." }
  ],

  formServiceOptions: ["Full Service Plumbing", "Water Heater Repair", "Clogged Drain Clearing", "Leak Detection & Repair", "Sewer & Drain Work", "Emergency Plumbing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!