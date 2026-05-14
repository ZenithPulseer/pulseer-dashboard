import { LayoutDashboard, Users, FileCode, Activity, AlertTriangle, ShieldCheck, Settings, Bell } from 'lucide-react';

export const NAVIGATION = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Accounts', href: '/accounts', icon: Users },
  { name: 'Contracts', href: '/contracts', icon: FileCode },
  { name: 'Events', href: '/events', icon: Activity },
  { name: 'Alerts', href: '/alerts', icon: AlertTriangle },
  { name: 'Rules', href: '/rules', icon: ShieldCheck },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Health', href: '/health', icon: Activity },
  { name: 'Settings', href: '/settings', icon: Settings },
];
