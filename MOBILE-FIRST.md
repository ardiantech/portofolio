# 📱 Mobile-First Design Guidelines

## 🎯 Prinsip Utama

Semua komponen dan halaman harus dirancang dengan **Mobile-First Approach**:
1. **Mulai dari Mobile** (320px - 640px)
2. **Tablet** (640px - 1024px)
3. **Desktop** (1024px+)

---

## 📐 Breakpoints Tailwind

```css
/* Default: Mobile (< 640px) */
.class

/* Small (≥ 640px) */
sm:class

/* Medium (≥ 768px) */
md:class

/* Large (≥ 1024px) */
lg:class

/* Extra Large (≥ 1280px) */
xl:class
```

---

## ✅ Mobile Menu Implementation

### **Fitur Mobile Menu:**
- ✨ **Hamburger Button** - Lucide Menu/X icons
- ✨ **Slide-in Animation** - Spring animation dari kanan
- ✨ **Backdrop Blur** - Dark overlay dengan blur
- ✨ **Staggered Items** - Menu items muncul berurutan
- ✨ **Active State** - Highlight halaman aktif
- ✨ **Icons** - Emoji icons untuk setiap menu
- ✨ **Auto Close** - Menutup saat link diklik
- ✨ **Body Scroll Lock** - Mencegah scroll saat menu terbuka

### **Struktur:**
```
components/
  ├── Navbar.tsx (Updated)
  │   ├── Desktop Menu (hidden md:flex)
  │   ├── Mobile Button (md:hidden)
  │   └── Mobile Slide Menu (Framer Motion)
```

---

## 🎨 Mobile-First Component Guidelines

### **1. Spacing & Padding**
```tsx
// ❌ Bad
<div className="px-6 py-12">

// ✅ Good (Mobile first)
<div className="px-4 sm:px-6 py-8 sm:py-12">
```

### **2. Text Sizes**
```tsx
// ❌ Bad
<h1 className="text-4xl">

// ✅ Good (Mobile first)
<h1 className="text-2xl sm:text-3xl md:text-4xl">
```

### **3. Grid Layouts**
```tsx
// ❌ Bad
<div className="grid grid-cols-4 gap-6">

// ✅ Good (Mobile first)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
```

### **4. Flex Direction**
```tsx
// ❌ Bad
<div className="flex flex-row gap-6">

// ✅ Good (Mobile first)
<div className="flex flex-col md:flex-row gap-4 md:gap-6">
```

### **5. Images**
```tsx
// ❌ Bad
<div className="w-[400px] h-[400px]">

// ✅ Good (Mobile first)
<div className="w-full max-w-[280px] sm:max-w-[400px]">
```

---

## 📋 Checklist untuk Setiap Halaman

- [ ] Test di 320px (iPhone SE)
- [ ] Test di 375px (iPhone 12/13)
- [ ] Test di 390px (iPhone 14 Pro)
- [ ] Test di 768px (iPad)
- [ ] Test di 1024px (Desktop)
- [ ] Test di 1920px (Large Desktop)

### **Tools:**
- Chrome DevTools Responsive Mode
- Firefox Responsive Design Mode
- Safari Web Inspector

---

## 🎯 Current Status

### **✅ Implemented:**
- ✅ Mobile Navigation Menu (Slide-in dengan animasi)
- ✅ Responsive Header (Logo, ThemeToggle, Mobile Button)
- ✅ Mobile-first Navbar component
- ✅ Backdrop overlay dengan blur
- ✅ Body scroll lock saat menu terbuka

### **📝 To Review:**
- [ ] HomeContent - Check responsive images & spacing
- [ ] AboutContent - Check stats grid & timeline
- [ ] ProjectsContent - Check project cards grid
- [ ] ContactContent - Check form layout
- [ ] SkillsContent - Check skills grid

---

## 🚀 Best Practices

### **1. Touch Targets**
Minimum 44px × 44px untuk mobile buttons:
```tsx
<button className="w-10 h-10 sm:w-12 sm:h-12">
```

### **2. Font Sizes**
```tsx
// Minimum 16px untuk body text (prevents zoom on iOS)
<p className="text-base">

// Headings
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
```

### **3. Spacing**
```tsx
// Sections
<section className="py-8 sm:py-12 md:py-16">

// Containers
<div className="px-4 sm:px-6 md:px-8">
```

### **4. Hidden Elements**
```tsx
// Hide on mobile, show on desktop
<div className="hidden md:block">

// Show on mobile, hide on desktop
<div className="md:hidden">
```

---

## 📱 Mobile Menu Behavior

### **Open:**
1. Hamburger icon → X icon
2. Slide-in dari kanan (spring animation)
3. Backdrop blur muncul
4. Body scroll disabled
5. Menu items stagger entrance

### **Close:**
1. Click backdrop / X icon / menu item
2. Slide-out ke kanan
3. Backdrop fade out
4. Body scroll enabled
5. Icon kembali ke hamburger

---

## 🎨 Animation Guidelines

### **Mobile:**
- Lebih subtle animations
- Faster durations (0.2-0.3s)
- Prefer transform over width/height

### **Desktop:**
- Richer animations allowed
- Longer durations (0.3-0.6s)
- Can use more complex effects

---

## 📌 Notes

- **Always test on real devices**, not just DevTools
- **Performance matters** - Mobile devices less powerful
- **Touch-friendly** - Bigger tap targets, no hover-only features
- **Accessibility** - Keyboard navigation, screen readers
- **Loading states** - Mobile networks slower

---

**Last Updated:** September 14, 2026
**Author:** Rizal Ardianto
