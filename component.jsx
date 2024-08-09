/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3eRYvtyqbC9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          Acme Corp
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Portfolio
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Team
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex">Get Started</Button>
      </header>
      <section id="hero" className="bg-primary py-24 px-6 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Unlock Your Business Potential</h1>
        <p className="text-lg mb-8">We provide innovative solutions to help your business thrive in the digital age.</p>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-primary font-medium hover:bg-primary-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
          prefetch={false}
        >
          Get Started
        </Link>
      </section>
      <section id="about" className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-muted-foreground mb-6">
              At Acme Corp, we are a team of passionate professionals dedicated to helping businesses like yours succeed
              in the digital age. With years of experience and a deep understanding of the latest technologies, we
              provide innovative solutions to help you achieve your goals.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-md shadow-sm">
              <RocketIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Rapid Development</h3>
              <p className="text-muted-foreground">
                Our agile approach ensures fast and efficient delivery of your projects.
              </p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <CogIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Cutting-Edge Technology</h3>
              <p className="text-muted-foreground">
                We leverage the latest technologies to provide innovative solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <UsersIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">Our team is here to support you every step of the way.</p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <BriefcaseIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Proven Expertise</h3>
              <p className="text-muted-foreground">We have a track record of delivering successful projects.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 px-6 bg-muted">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground mb-12">
            We offer a wide range of services to help your business succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-md shadow-sm">
              <CodeIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">We build custom, responsive websites and web applications.</p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <BrushIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">We create visually appealing and user-friendly designs.</p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <BoltIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground">We help you reach your target audience and grow your business.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Portfolio</h2>
          <p className="text-muted-foreground mb-12 text-center">Check out some of our recent projects.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-md shadow-sm">
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project 1"
                className="rounded-md mb-4 object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-lg font-bold mb-2">Project 1</h3>
              <p className="text-muted-foreground">A modern and responsive website for a leading tech company.</p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project 2"
                className="rounded-md mb-4 object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-lg font-bold mb-2">Project 2</h3>
              <p className="text-muted-foreground">A sleek and intuitive web application for a finance startup.</p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project 3"
                className="rounded-md mb-4 object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-lg font-bold mb-2">Project 3</h3>
              <p className="text-muted-foreground">A visually stunning e-commerce website for a fashion brand.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="py-20 px-6 bg-muted">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground mb-12">
            Our talented team is dedicated to delivering exceptional results.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-md shadow-sm">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-bold mb-2 mt-4">John Doe</h3>
              <p className="text-muted-foreground">CEO</p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-bold mb-2 mt-4">Jane Smith</h3>
              <p className="text-muted-foreground">CTO</p>
            </div>
            <div className="bg-card p-6 rounded-md shadow-sm">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-bold mb-2 mt-4">Michael Parker</h3>
              <p className="text-muted-foreground">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-muted-foreground mb-12 text-center">
            Have a project in mind? Let's discuss how we can help.
          </p>
          <form className="bg-card p-8 rounded-md shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2 mt-6">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" rows={5} />
            </div>
            <div className="mt-6 text-center">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </section>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Acme Corp. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
