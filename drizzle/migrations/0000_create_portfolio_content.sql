-- Portfolio content tables (public read-only site data)

CREATE TABLE public.portfolio_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  value text NOT NULL,
  label text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.skill_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  icon text NOT NULL,
  accent text NOT NULL DEFAULT 'primary',
  skills jsonb NOT NULL DEFAULT '[]'::jsonb,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role text NOT NULL,
  company text NOT NULL,
  client text NOT NULL,
  period text NOT NULL,
  location text NOT NULL,
  summary text NOT NULL,
  points jsonb NOT NULL DEFAULT '[]'::jsonb,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  website text,
  tag text NOT NULL,
  tags jsonb NOT NULL DEFAULT '[]'::jsonb,
  icon text NOT NULL,
  points jsonb NOT NULL DEFAULT '[]'::jsonb,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon text NOT NULL,
  value text NOT NULL,
  label text NOT NULL,
  detail text NOT NULL,
  accent text NOT NULL DEFAULT 'primary',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.portfolio_stats TO anon, authenticated;
GRANT SELECT ON public.skill_groups TO anon, authenticated;
GRANT SELECT ON public.experience TO anon, authenticated;
GRANT SELECT ON public.projects TO anon, authenticated;
GRANT SELECT ON public.achievements TO anon, authenticated;
GRANT ALL ON public.portfolio_stats TO service_role;
GRANT ALL ON public.skill_groups TO service_role;
GRANT ALL ON public.experience TO service_role;
GRANT ALL ON public.projects TO service_role;
GRANT ALL ON public.achievements TO service_role;

ALTER TABLE public.portfolio_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skill_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read portfolio stats" ON public.portfolio_stats FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read skill groups" ON public.skill_groups FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read experience" ON public.experience FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read projects" ON public.projects FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read achievements" ON public.achievements FOR SELECT TO anon, authenticated USING (true);

INSERT INTO public.portfolio_stats (value, label, sort_order) VALUES
  ('4+', 'Years in QA', 0),
  ('1,400+', 'Defects reported', 1),
  ('18+', 'Modules tested', 2),
  ('10', 'Release cycles', 3);

INSERT INTO public.skill_groups (title, icon, accent, skills, sort_order) VALUES
  ('Programming', 'Code2', 'primary', '["Core Java","SQL"]'::jsonb, 0),
  ('Testing Skills', 'FlaskConical', 'cyan', '["Manual Testing","Functional","Regression","Smoke","Sanity","Integration","System Testing","UAT","End-to-End","Mobile (Android & iOS)","Cross-Browser","Responsive"]'::jsonb, 1),
  ('Automation', 'Workflow', 'sky', '["Selenium WebDriver","TestNG","Maven","Hybrid Framework","Data-Driven Testing","Page Object Model (POM)"]'::jsonb, 2),
  ('API Testing', 'Network', 'primary', '["Postman","Swagger","Chucker / Proxyman","HTTP Inspection"]'::jsonb, 3),
  ('Tools & Platforms', 'Layers', 'amber', '["Jira","Eclipse","GitHub","MySQL","PostgreSQL","MS Excel","TestFlight"]'::jsonb, 4),
  ('AI Tools & Methodologies', 'Sparkles', 'cyan', '["Agile Scrum","SDLC","STLC","Defect Life Cycle","AI-Assisted Test Design","ChatGPT","Claude","Copilot","AWS Kiro"]'::jsonb, 5);

INSERT INTO public.experience (role, company, client, period, location, summary, points, sort_order) VALUES
  ('Senior Executive — QA', 'Docubay Media', 'Epic Company', 'Nov 2025 — Present', 'Hyderabad, India',
   'Leading QA across ShubhAstro, Epic Shorts, IPL, BCCI and Telco products — validating web, Android and iOS applications to support release quality.',
   '["Coordinated a team of 2–3 QA members: assigning testing tasks, monitoring progress and supporting timely completion of testing activities.","Communicated directly with senior management to present testing status, report progress, and highlight risks and issues.","Designed and executed 300+ test cases across application modules covering functional requirements, end-to-end workflows and regression scenarios.","Leveraged ChatGPT for requirement analysis and edge-case discovery; manually reviewed every AI-generated output before use.","Developed Selenium WebDriver (Java + TestNG) scripts validating login workflows, alerts, calendars, file uploads, multi-window handling and data-driven scenarios.","Performed API testing with Postman and Swagger — validating payloads, HTTP status codes, schema structure, authentication and negative scenarios.","Validated consistency between application UI data and MongoDB records to verify data integrity and backend synchronization."]'::jsonb, 0),
  ('Software Test Engineer', 'Imtac India Pvt Ltd', 'Oman Medical Specialty Board (OMSB)', 'Sep 2022 — Aug 2025', 'Hyderabad, India · 1 year on-site in Oman',
   'End-to-end testing of OMSB web modules — Applicant Registration, Examination, Training Programs, VEHPC, OCT and Promotions.',
   '["Created and executed test cases from business requirements across every OMSB module and sprint.","Conducted UAT sessions and live demos with business stakeholders to validate requirements and improve user experience.","Identified, logged and tracked defects in Jira, ensuring timely resolution with the development team.","Used ChatGPT for requirement analysis and test documentation, rigorously validating all AI-generated outputs.","Worked on-site in Oman for 1 year, leading UAT sessions and gathering direct customer feedback."]'::jsonb, 1);

INSERT INTO public.projects (name, website, tag, tags, icon, points, sort_order) VALUES
  ('ShubhAstro', 'https://shubhastro.ai/', 'Astrology Platform', '["Manual Testing","API Testing","Jira","Automation"]'::jsonb, 'Sparkles',
   '["Primary QA for Kundli, Horoscope, Panchang, Muhurat, astrologer consultations, chat, calls, payments and report generation.","Executed functional, regression, smoke, sanity, integration, UAT and exploratory testing across release cycles.","Validated APIs using Postman and Swagger; documented defects in Jira with cross-functional teams."]'::jsonb, 0),
  ('Epic Shorts', 'https://epicon.in/', 'OTT / Shorts Streaming', '["Manual Testing","API Testing","Postman","Jira"]'::jsonb, 'MonitorSmartphone',
   '["End-to-end testing of Web, Android and iOS applications.","Validated Registration, Login, Subscription, Search, Wishlist, Continue Watching, Profile Management and Video Playback workflows.","Conducted API testing with Postman alongside functional and regression suites."]'::jsonb, 1),
  ('Telco OTT Suite', NULL, 'Operator Branded OTT Apps', '["Manual Testing","API Testing","Postman","Jira"]'::jsonb, 'Rocket',
   '["Tested OTT applications including BabuShots, BhakkShots, KhatakShots and ThandaCola across Web and Mobile.","Validated content streaming, subscription workflows, authentication, content discovery and profile management.","Executed API and regression testing across multiple releases."]'::jsonb, 2),
  ('OMSB Portal', 'https://omsb.gov.om/', 'Medical Education Board', '["Manual Testing","SQL","Postman","Jira","Automation"]'::jsonb, 'ShieldCheck',
   '["End-to-end testing of Applicant Registration, Training Programs and Promotions modules.","Conducted UAT simulations using persona-based exploratory testing to improve usability feedback.","1 year on-site in Oman: led UAT sessions, delivered live stakeholder demos and gathered customer feedback."]'::jsonb, 3);

INSERT INTO public.achievements (icon, value, label, detail, accent, sort_order) VALUES
  ('Bug', '1,400+', 'Defects identified and reported', 'Logged, tracked, and verified across complex system components, drastically reducing post-release production defects.', 'primary', 0),
  ('Layers', '18+', 'Application modules tested', 'Owned end-to-end workflow validation for core business modules, ensuring zero-regression feature deployments.', 'cyan', 1),
  ('Rocket', '10', 'Release cycles supported', 'Partnered with cross-functional Dev/Ops teams to ensure seamless deployment readiness and zero-downtime releases.', 'amber', 2),
  ('Cpu', '2 hrs', 'Daily regression time saved', 'Designed a scalable automation framework from scratch, cutting cycle time and accelerating daily release velocity.', 'sky', 3);