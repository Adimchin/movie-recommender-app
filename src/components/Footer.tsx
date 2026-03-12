import {
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

function Footer(){

  return(
    <footer className="px-5 py-10 bg-black space-y-9">
        <div className={`${'text-white'} flex gap-4 mb-7`}>
          <Facebook size={21} />
          <Twitter size={21} />
          <Youtube size={21} />
        </div>
        <div className="grid grid-cols-2 text-white/70 text-sm font-extralight gap-4 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div>Audio Description</div>
            <div>Investor Relations</div>
            <div>Legal Notices</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Help Center Jobs</div>
            <div>Cookie Preference</div>
            <div>Jobs</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Gift Cards</div>
            <div>Terms of Use</div>
            <div>Corporate Information</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Media Center</div>
            <div>Privacy</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="text-white/70 py-2 text-sm">© 2026 
        MovieWorld, Inc.</div>
      </footer>
  )
}

export default Footer;