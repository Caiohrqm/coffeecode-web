import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  type = "link",
  ...props
}) {
  const styles = {
    primary: "bg-amber-200 hover:bg-amber-300 ",
    secondary: "border-2 border-amber-200 hover:bg-stone-900 ",
  };

  const variantClass = `flex gap-2 py-2 px-4 rounded ${styles[variant]} `;

  return (
    <>
      {type === "link" ? (
        <Link href="#" {...props} className={variantClass}>
          {children}
        </Link>
      ) : (
        <button {...props} className={variantClass}>
          {children}
        </button>
      )}
    </>
  );
}
