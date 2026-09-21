import { certMap } from "@/lib/case-studies";

export function CertMap() {
  return (
    <section id="credentials" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
          Credentials
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
          Certification to capability
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Only certificates with a file or Credly link on this site are listed.
          Years are taken from the PDF file dates (2025). Issue dates on Credly
          may differ.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-xs uppercase tracking-wider text-neutral-700">
                <th className="py-3 pr-4">Credential</th>
                <th className="py-3 pr-4">Year</th>
                <th className="py-3 pr-4">Capability</th>
                <th className="py-3">Verify</th>
              </tr>
            </thead>
            <tbody>
              {certMap.map((row) => (
                <tr key={row.credential} className="border-b border-black/5">
                  <td className="py-4 pr-4 font-medium text-neutral-900">
                    {row.credential}
                    <span className="mt-1 block text-xs text-muted">
                      {row.issuer}
                    </span>
                  </td>
                  <td className="py-4 pr-4">{row.year}</td>
                  <td className="py-4 pr-4 text-muted">{row.capability}</td>
                  <td className="py-4">
                    <a className="underline" href={row.href} target="_blank" rel="noopener noreferrer">
                      Credly
                    </a>
                    {row.pdf ? (
                      <>
                        {" · "}
                        <a className="underline" href={row.pdf}>
                          PDF
                        </a>
                      </>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
