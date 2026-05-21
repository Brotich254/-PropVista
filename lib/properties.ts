export type Property = {
  id: string;
  title: string;
  slug: string;
  location: string;
  city: string;
  country: string;
  price: string;
  purpose: "For Sale" | "For Rent";
  type: "Apartment" | "House" | "Villa" | "Townhouse";
  bedrooms: number;
  bathrooms: number;
  areaSqm: number;
  status: "Approved" | "Pending" | "Draft";
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  agent: {
    name: string;
    agency: string;
    phone: string;
    email: string;
  };
};

export const properties: Property[] = [
  {
    id: "pv-1001",
    title: "Modern Riverside Apartment",
    slug: "modern-riverside-apartment",
    location: "Westlands, Nairobi",
    city: "Nairobi",
    country: "Kenya",
    price: "$185,000",
    purpose: "For Sale",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    areaSqm: 132,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A bright apartment with open living space, balcony views, secure parking, and quick access to restaurants, schools, and offices.",
    amenities: ["Balcony", "Secure parking", "Gym", "Backup power", "Elevator"],
    agent: {
      name: "Sarah Mwangi",
      agency: "PrimeNest Realty",
      phone: "+254 700 123 456",
      email: "sarah@primenest.co.ke"
    }
  },
  {
    id: "pv-1002",
    title: "Family House With Garden",
    slug: "family-house-with-garden",
    location: "Karen, Nairobi",
    city: "Nairobi",
    country: "Kenya",
    price: "$2,400/mo",
    purpose: "For Rent",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    areaSqm: 260,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A quiet family home with mature garden space, generous bedrooms, a home office, and reliable security in a leafy neighborhood.",
    amenities: ["Garden", "Home office", "Staff quarters", "CCTV", "Pet friendly"],
    agent: {
      name: "Brian Otieno",
      agency: "UrbanKey Properties",
      phone: "+254 711 987 654",
      email: "brian@urbankey.co.ke"
    }
  },
  {
    id: "pv-1003",
    title: "Coastal Villa Near The Beach",
    slug: "coastal-villa-near-the-beach",
    location: "Nyali, Mombasa",
    city: "Mombasa",
    country: "Kenya",
    price: "$420,000",
    purpose: "For Sale",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    areaSqm: 410,
    status: "Pending",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A premium coastal villa with pool, guest wing, entertainment terrace, and strong holiday rental potential.",
    amenities: ["Pool", "Guest wing", "Ocean breeze", "Terrace", "Solar water heating"],
    agent: {
      name: "Aisha Noor",
      agency: "Coastline Estates",
      phone: "+254 722 444 221",
      email: "aisha@coastline.co.ke"
    }
  }
];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
