export const Section = ({ children, noMargin=false }: { children: React.ReactNode, noMargin?: boolean }) => {
  return (
    <section className={noMargin ? "mt-10" : "mt-30"}>
      {children}
    </section>
  );
}