'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#1a2b4a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {/* LTL Mark */}
              <svg width="48" height="40" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="8" width="14" height="60" fill="white"/>
                <rect x="0" y="54" width="32" height="14" fill="white"/>
                <rect x="40" y="8" width="40" height="14" fill="white"/>
                <rect x="53" y="8" width="14" height="60" fill="white"/>
                <polygon points="53,22 67,8 53,8" fill="#2b6cb0"/>
                <rect x="90" y="8" width="14" height="60" fill="white"/>
                <rect x="90" y="54" width="30" height="14" fill="white"/>
              </svg>
              <div className="border-l border-white border-opacity-30 pl-3">
                <div className="text-white font-bold text-sm leading-tight">LONG TERM</div>
                <div className="text-white font-bold text-sm leading-tight">LEASING S.R.L</div>
                <div className="text-[#2b6cb0] text-xs leading-tight">FLEXIBLE IT HARDWARE LEASING</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#2b6cb0] transition-colors font-medium">Home</Link>
            <Link href="/about" className="hover:text-[#2b6cb0] transition-colors font-medium">About</Link>
            <Link href="/how-it-works" className="hover:text-[#2b6cb0] transition-colors font-medium">How It Works</Link>
            <Link href="/contact" className="hover:text-[#2b6cb0] transition-colors font-medium">Contact</Link>
            <Link
              href="/contact"
              className="bg-[#2b6cb0] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#3b82c4] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
