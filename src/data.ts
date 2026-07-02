export const profile = {
  name: "Mir Owais Ali Khan",
  handle: "OWAIS_KHAN",
  role: "Cyber Security Engineer",
  version: "V5.0",
  tagline: "SIEM & Threat Detection | Vulnerability Management | Penetration Testing",
  location: "Chicago, IL, USA",
  phone: "+1 872-222-7766",
  email: "mirowaisalikhan03@gmail.com",
  linkedin: "https://www.linkedin.com/in/owais03/",
  linkedinHandle: "owais03",
  status: "Authorized to work in the U.S. · Open to Relocation · Onsite / Hybrid / Remote",
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
};

export const summary =
  "Cybersecurity Engineer with 5+ years of experience in security operations, vulnerability management, penetration testing, cloud security, and identity and access management. Deep hands-on experience with Splunk, IBM QRadar, Tenable Nessus, Rapid7 InsightVM, Palo Alto Networks, Cisco ASA, AWS, Azure, SailPoint IdentityIQ, and IBM Security Identity Manager.";

export const summaryPoints = [
  "Reduced SIEM alert volume by 42% and lowered mean time to resolution from 4.8 hours to 2.3 hours by tuning correlation rules in Splunk and IBM QRadar.",
  "Ran 80+ vulnerability assessments per quarter across 2,000+ systems and reached 91% remediation within the 90-day SLA.",
  "Supported audits for SOC 1, SOC 2, FISCAM, and PCI DSS, contributing to a 98% audit pass rate.",
  "CompTIA Cybersecurity Analyst (CySA+) and Certified Ethical Hacker (CEH) certified.",
];

export const metrics = [
  { value: "5+", label: "YRS_EXPERIENCE" },
  { value: "42%", label: "ALERT_REDUCTION" },
  { value: "2.3h", label: "MTTR" },
  { value: "98%", label: "AUDIT_PASS_RATE" },
];

export const education = [
  {
    file: "MSc_Computer_Science.deg",
    degree: "Master's in Computer Science",
    school: "Campbellsville University, Louisville, KY",
    detail: "Coursework: Cybersecurity, AI, Network Security, OS, Software Engineering",
  },
];

export const skillGroups = [
  {
    key: "SIEM",
    title: "SIEM & Threat Detection",
    items: [
      "Splunk",
      "IBM QRadar",
      "LogRhythm",
      "Elastic SIEM",
      "ELK Stack",
      "Correlation Rule Tuning",
      "Alert Triage",
      "Log Analysis",
      "SOC Operations",
      "Incident Response",
      "MTTR",
    ],
  },
  {
    key: "VULN",
    title: "Vulnerability Management",
    items: [
      "Tenable Nessus",
      "Tenable.io",
      "Rapid7 InsightVM",
      "Qualys Cloud",
      "OpenVAS",
      "Acunetix",
      "HP WebInspect",
      "IBM AppScan",
      "DAST",
      "SAST",
      "Patch Management",
    ],
  },
  {
    key: "PENTEST",
    title: "Penetration Testing & AppSec",
    items: [
      "Metasploit",
      "Burp Suite",
      "OWASP ZAP",
      "Nmap",
      "Wireshark",
      "tcpdump",
      "DirBuster",
      "Kali Linux",
      "HP Fortify",
      "OWASP Top 10",
      "XSS / SQLi / CSRF",
    ],
  },
  {
    key: "NETWORK",
    title: "Network Security",
    items: [
      "Palo Alto Networks",
      "Cisco ASA",
      "Fortinet",
      "Check Point",
      "NGFW",
      "Snort / Suricata / Zeek",
      "IDS / IPS",
      "TCP/IP · VLANs",
      "IPSec · SSL/TLS",
      "SSH · SNMP · DNS",
    ],
  },
  {
    key: "CLOUD",
    title: "Cloud & Infrastructure Security",
    items: [
      "AWS (EC2, VPC, IAM)",
      "CloudTrail · S3",
      "Azure IaaS/PaaS",
      "Entra ID · Defender",
      "CSPM",
      "Network Segmentation",
      "VMware ESXi",
      "Red Hat Linux · Ubuntu",
      "Windows Server",
    ],
  },
  {
    key: "IAM",
    title: "Identity & Access Management",
    items: [
      "Active Directory",
      "SailPoint IdentityIQ",
      "IBM ISIM 7",
      "PAM",
      "RBAC",
      "SSO",
      "Access Reviews",
      "Least Privilege",
      "Governance",
    ],
  },
  {
    key: "ENDPOINT",
    title: "Endpoint & Data Protection",
    items: [
      "CrowdStrike Falcon",
      "SentinelOne",
      "McAfee Endpoint",
      "Symantec",
      "DLP (Forcepoint, Digital Guardian)",
      "Proofpoint · Mimecast",
      "Barracuda",
      "Tripwire FIM",
    ],
  },
  {
    key: "GRC",
    title: "Compliance & Governance",
    items: [
      "NIST CSF",
      "NIST 800-53",
      "ISO 27001",
      "PCI DSS",
      "HIPAA",
      "SOC 1 / SOC 2 / FISCAM",
      "RSA Archer",
      "ServiceNow",
      "BCP / DRP",
    ],
  },
  {
    key: "AUTO",
    title: "Scripting & Automation",
    items: ["Python", "PowerShell", "Bash", "JavaScript", "Java"],
  },
];

export const experience = [
  {
    role: "Cyber Security Engineer",
    company: "TransUnion",
    location: "Chicago, IL",
    period: "Apr 2024 – Present",
    status: "ACTIVE",
    highlights: [
      "Reduced vulnerability remediation time by 35% by improving DAST scan workflows in HP WebInspect and Tenable, helping teams deploy patches 2+ weeks faster.",
      "Configured IBM Security Identity Manager (ISIM 7) with SSO and secure middleware integration, supporting a 98% pass rate across SOC 1, SOC 2, and FISCAM audits.",
      "Managed firewall policies and rule changes on Palo Alto Networks and Cisco ASA, maintaining 99.8% uptime through regular rule reviews and tuning.",
      "Configured AWS and Azure security controls including IAM policies, security groups, network segmentation, and CloudTrail logging, reducing cloud security incidents by 45%.",
      "Integrated security checks into the SDLC with Java and .NET teams, lowering web application vulnerabilities reaching production by 28%.",
      "Patched critical vulnerabilities on Red Hat Linux, macOS, and Windows Server within 24–48 hours of release, ahead of internal SLA.",
      "Deployed and tuned IDS, IPS, encryption, and anti-virus tools across 500+ endpoints.",
    ],
    stack: [
      "Nmap",
      "Wireshark",
      "Metasploit",
      "OWASP ZAP",
      "HP WebInspect",
      "Tenable",
      "IBM ISIM",
      "Palo Alto",
      "Cisco ASA",
      "AWS",
      "Azure",
      "IDS/IPS",
    ],
  },
  {
    role: "Cyber Security Engineer",
    company: "CDK Global",
    location: "Hoffman Estates, IL",
    period: "Jul 2020 – Nov 2023",
    status: "ARCHIVED",
    highlights: [
      "Reduced SIEM alert volume by 42% in Splunk and IBM QRadar by tuning correlation rules and lowering false positives from 68% to 18%.",
      "Lowered mean time to resolution from 4.8 hours to 2.3 hours by reviewing 500+ daily security events using the ELK stack.",
      "Ran 80+ vulnerability assessments per quarter using Tenable Nessus and Rapid7 InsightVM across 2,000+ systems, reaching a 91% remediation rate within the 90-day SLA.",
      "Configured and monitored DLP policies for PII, financial data, and IP; blocked 12 critical data exfiltration attempts.",
      "Performed 25+ web application penetration tests per year using OWASP ZAP and Burp Suite, identifying 150+ findings with remediation guidance.",
      "Worked with dev teams to fix XSS, SQL injection, CSRF, and broken authentication, reducing application vulnerabilities by 33% YoY.",
      "Identified 8 unauthorized production changes using Tripwire file integrity monitoring.",
      "Maintained compliance documentation for PCI DSS audits, contributing to a 96% compliance rating.",
    ],
    stack: [
      "Tenable Nessus",
      "Rapid7 InsightVM",
      "Splunk",
      "IBM QRadar",
      "ELK Stack",
      "OWASP ZAP",
      "Burp Suite",
      "DLP",
      "IBM AppScan",
      "Tripwire",
    ],
  },
];

export const certifications = [
  {
    title: "CompTIA Cybersecurity Analyst (CySA+)",
    issuer: "CompTIA",
    detail: "Behavioral Analytics · Threat Detection",
    status: "VERIFIED",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    detail: "Offensive Security · Penetration Testing",
    status: "VERIFIED",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

export const telemetry = [
  "[security] > Brute-force attempt blocked from IP: 45.122.3.10",
  "[siem] > Splunk correlation rule tuned // false-positive rate: 18%",
  "[vuln] > Nessus scan across 2,000+ hosts... 91% remediated",
  "[iam] > SailPoint access review cycle synchronized [DONE]",
  "[cloud] > AWS CloudTrail anomaly baseline updated [OK]",
  "[heartbeat] > Node status: 0 packets dropped | Latency: 12ms",
  "[threat_intel] > Synchronizing global threat signatures... [DONE]",
];
