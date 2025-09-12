import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const aiFeatures = [
    { name: "Report Analysis", path: "/report-explainer", icon: "📊" },
    { name: "AI Medicine Information", path: "/medicine-info", icon: "💊" },
    { name: "Health Intelligence", path: "/dashboard", icon: "📈" },
    { name: "Symptom Assessment", path: "/symptom-checker", icon: "🔍" },
    {
      name: "Nutrition Intelligence",
      path: "/nutrition-calculator",
      icon: "🥗",
    },
    { name: "Healthcare Navigator", path: "/govt-schemes", icon: "🏛️" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold" to="/">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            MediVolt
          </span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium hidden sm:block">
            AI Health
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link
            className="text-gray-700 hover:text-primary transition-colors font-medium"
            to="/"
          >
            Home
          </Link>

          {/* Healthcare Intelligence Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
            onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium">
              Healthcare Intelligence
              <ChevronDown className="h-4 w-4" />
            </button>

            {isFeaturesDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                {aiFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.path}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors hover:font-medium"
                  >
                    <span className="text-base">{feature.icon}</span>
                    {feature.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            className="text-gray-700 hover:text-primary transition-colors font-medium"
            to="/emergency-sos"
          >
            Emergency Response
          </Link>
          <Link
            className="text-gray-700 hover:text-primary transition-colors font-medium"
            to="/fitness-planner"
          >
            Fitness Intelligence
          </Link>
          <Link
            className="text-gray-700 hover:text-primary transition-colors font-medium"
            to="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-gray-700 hover:text-primary transition-colors font-medium"
            to="/admin"
          >
            Admin Panel
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Get Started Button */}
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            asChild
          >
            <Link to="/dashboard">Get Health Score</Link>
          </Button>

          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-gray-700">
                {user?.name || user?.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              to="/"
            >
              Home
            </Link>
            {aiFeatures.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              >
                <span>{feature.icon}</span>
                {feature.name}
              </Link>
            ))}
            <Link
              className="block text-gray-700 hover:text-primary transition-colors"
              to="/emergency-sos"
            >
              🚨 Emergency SOS
            </Link>
            <Link
              className="block text-gray-700 hover:text-primary transition-colors"
              to="/fitness-planner"
            >
              Fitness Planner
            </Link>
            <Link
              className="block text-gray-700 hover:text-primary transition-colors"
              to="/pricing"
            >
              💰 Pricing Plans
            </Link>
            <Link
              className="block text-gray-700 hover:text-primary transition-colors"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="block text-gray-700 hover:text-primary transition-colors"
              to="/admin"
            >
              🔐 Admin Panel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
