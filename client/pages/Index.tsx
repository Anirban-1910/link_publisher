import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-900">Name</div>
            <nav className="hidden md:flex items-center space-x-1">
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                Product
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                Templates
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                Customers
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                Resources
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                Pricing
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-6 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
              Sign In
            </button>
            <button className="px-6 py-2 text-sm text-white bg-gray-900 rounded-full hover:bg-gray-800">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Publisher
            </span>{" "}
            for
            <br />
            your Content & Links
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Create a central hub for all your important links – publish,
            organize, and share them with your audience in one beautiful,
            easy-to-manage platform
          </p>
          <button className="px-8 py-3 text-white bg-gray-900 rounded-full hover:bg-gray-800 text-lg font-medium">
            Get started free
          </button>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gray-200 rounded-lg w-full h-64 lg:h-96 mx-auto max-w-6xl shadow-2xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
              <div className="flex flex-wrap justify-center gap-2 opacity-50">
                <span className="px-3 py-1 text-xs bg-white rounded-full border border-purple-200 text-gray-600">
                  Internal tools
                </span>
                <span className="px-3 py-1 text-xs bg-white rounded-full border border-purple-200 text-gray-600">
                  Customer portals
                </span>
                <span className="px-3 py-1 text-xs bg-white rounded-full border border-purple-200 text-gray-600">
                  SaaS apps
                </span>
                <span className="px-3 py-1 text-xs bg-white rounded-full border border-purple-200 text-gray-600">
                  Content
                </span>
                <span className="px-3 py-1 text-xs bg-white rounded-full border border-purple-200 text-gray-600">
                  Websites
                </span>
                <span className="px-3 py-1 text-xs bg-white rounded-full border border-purple-200 text-gray-600">
                  Content management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">
            Loved by teams around the world
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Features: Promote Your Sites */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="px-4 py-2 text-xs uppercase tracking-wider text-purple-600 bg-purple-100 rounded-full">
              how it works
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-6">
            Promote Your Sites{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              blazingly fast
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Share your entire digital presence with a single link — from social
            profiles to projects, all in one place.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6"></div>
              <h3 className="text-3xl font-bold mb-4">
                Publish to{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  any data source
                </span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tap into popular websites like Airtable,
                <br />
                Get the best content for your Links and Sites
                <br />
                connect with us and get reach.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow">
                See all listings →
              </button>
            </div>
            <div className="bg-gray-200 rounded-3xl h-96"></div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full">
              Connect
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-900 rounded-full border">
              Provide Link
            </button>
          </div>
        </div>
      </section>

      {/* Features: Integrate */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="px-4 py-2 text-xs uppercase tracking-wider text-orange-600 bg-orange-100 rounded-full">
              Power
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Integrate with any{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Listed website
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Seamlessly integrate with your favorite platforms and share all your
            links through one smart, customizable page.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl mb-6"></div>
              <h3 className="text-3xl font-bold mb-4">
                Be the Best{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Publisher
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Be the best publisher of your digital world share, organize, and
                showcase everything in one powerful link
              </p>
            </div>
            <div className="bg-gray-200 rounded-3xl h-96"></div>
          </div>

          <div className="mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl mb-6 mx-auto"></div>
              <h3 className="text-3xl font-bold mb-4">
                Be the Best{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Advertiser
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reach engaged audiences by placing your brand inside the link
                hubs they visit every day smart, seamless, and built for
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="px-4 py-2 text-xs uppercase tracking-wider text-purple-600 bg-purple-100 rounded-full">
              collaboration
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Bridge the gap
            </span>
            <br />
            between Websites
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            NAME makes the publishing process more collaborative, so everyone
            can publish better experiences together.
          </p>

          <div className="bg-gray-200 rounded-3xl h-64 lg:h-96 mb-16 max-w-6xl mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Empower{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  new websites
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Empower marketing, content, design, and product teams to build
                and publish. Developers can register custom components as
                building blocks that other team members can use.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Collaborate{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  famous sites
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Go from silos and endless backlogs to streamlined workflows
                between development and business teams. Let everyone focus on
                what they do best with branching and multiplayer mode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publish Anywhere */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="px-4 py-2 text-xs uppercase tracking-wider text-purple-600 bg-purple-100 rounded-full">
              how it works
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Publish{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              anywhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Deploy to your choice of content and link, so you can grow as you
            like.
          </p>

          <div className="bg-gray-200 rounded-3xl h-64 lg:h-96 max-w-6xl mx-auto"></div>
        </div>
      </section>

      {/* Scale Without Limits */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="px-4 py-2 text-xs uppercase tracking-wider text-white bg-white/10 rounded-full">
                scale up
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Scale without limits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Manage enterprise-level growth with ease. Scale up and maintain
              control, even as your application grows and evolves.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-orange-400 text-white rounded-full hover:shadow-lg transition-shadow">
              Get started →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SOC 2 Compliance",
                description:
                  "Plasmic meets SOC 2 standards for secure handling of sensitive information.",
              },
              {
                title: "SSO and Domain Capture",
                description:
                  "Available for for both name collaborators and end users of your application.",
              },
              {
                title: "Fine-Grained Permissions",
                description:
                  "Assign and manage fine grained access controls both within name and your applications.",
              },
              {
                title: "Branching & approvals",
                description:
                  "Collaborate at scale by working on isolated copies, then review and merge when ready.",
              },
              {
                title: "Shared Libraries",
                description:
                  "Centrally manage assets across your organization. Import and reuse within various projects with ease.",
              },
              {
                title: "On-Premise link Deployment",
                description:
                  "Deploy your links on-premise or behind content for enhanced control and reach.",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 p-6">
                <div className="bg-gray-200 rounded-lg h-32 mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="px-4 py-2 text-xs uppercase tracking-wider text-gray-600 bg-gray-100 rounded-full">
                the wall of love
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold">
              Our customers <span className="text-4xl">❤️</span> us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "It's already been a huge increase in efficiency for me, personally. I'm really looking forward to a huge drop in scope for our tests that require new components (most of them).",
                author: "James Armenta",
                company: "Intuit",
                role: "Software Engineer",
              },
              {
                quote:
                  "Really excited about this UI to React components platform. Definitely see a bright future!",
                author: "Herminio Garcia",
                company: "Sidecar Health",
                role: "Software Engineer",
              },
              {
                quote:
                  "By far one of the most empowering tools to come out in a while. If you're a designer/no coder/visual developer who wants to make world class applications, or a design or development studio looking for a way to serve your clients better and faster— check out Plasmic.",
                author: "Collin Thompson",
                company: "Intrepid Ventures",
                role: "CEO",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Build outside the box{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              with Name
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 text-sm bg-white/10 rounded-full">
              no credit card needed
            </span>
            <span className="px-4 py-2 text-sm bg-white/10 rounded-full">
              Unlimited time on free plan
            </span>
          </div>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 text-lg font-medium">
            Get started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">Name</div>
              <p className="text-gray-400 text-sm">
                Copyright © 2025 name, Inc. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Product</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Figma plugin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Support</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Slack Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Name Experts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Use Cases</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    CMS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Web app
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Business apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Internal tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Admin panels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    React app builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    All use cases
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms & Conditions
              </a>
              <span className="text-gray-400">·</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
