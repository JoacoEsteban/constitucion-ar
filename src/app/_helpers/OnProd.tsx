export default function OnProd ({ children }: { children: any }) {
  return process.env.NODE_ENV === 'production' ? children : null
}