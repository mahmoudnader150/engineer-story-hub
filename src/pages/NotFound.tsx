
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Burst, WebCorner } from "@/components/comic/ComicArt";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="comic-bg-cover relative isolate flex min-h-screen items-center justify-center overflow-hidden p-6">
      <WebCorner className="absolute left-0 top-0 -z-10 w-64 text-white/50 md:w-96" />
      <WebCorner className="absolute bottom-0 right-0 -z-10 w-64 rotate-180 text-white/50 md:w-96" />
      <div className="flex flex-col items-center gap-6 text-center">
        <Burst word="CRASH!" className="w-56 md:w-72" />
        <h1 className="comic-cover-title">404</h1>
        <p className="comic-caption text-lg">Oops! Page not found</p>
        <Link to="/" className="comic-btn comic-btn-paper inline-flex h-10 items-center px-6">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
