export const formatAddress = (address: string, length = 4) => {
  if (!address) return '';
  if (address.length <= length * 2 + 3) return address;
  return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
};

export const formatAmount = (amount: string | number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 7,
  }).format(Number(amount));
};

export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date));
};

export const formatTimeAgo = (date: string | Date) => {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return formatDate(date);
};
