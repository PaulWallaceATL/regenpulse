-- Seed partners for Partner Network page. Run after 009_partners.sql in Supabase SQL Editor.

INSERT INTO partners (name, category, url, sort_order) VALUES
  ('PNOE', 'VO2 Max Testing', 'https://pnoe.com', 1),
  ('PhysioPS', 'Physio & Performance', 'https://physiops.com', 2),
  ('RRG', 'Stem Cell', 'https://rrg.com', 3),
  ('Symmetry Neuro PT', 'Neuro PT, Brain Training & Recovery', 'https://www.symmetryneuropt.com', 4),
  ('Oxy Chambers', 'HBOT', 'https://www.oxychambers.com', 5),
  ('CryoPhit-USA', 'Cryotherapy', 'https://www.cryophitusa.com', 6),
  ('Arca Aesthetics', 'Approved Micro-Needling', 'https://www.arcaaesthetics.com', 7);
