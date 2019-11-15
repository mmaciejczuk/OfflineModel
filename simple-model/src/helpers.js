export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function formatPercentage(number) {
  return 0;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
