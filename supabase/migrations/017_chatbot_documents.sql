-- Chatbot context documents: admin uploads, chat API reads for context.
CREATE TABLE chatbot_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE chatbot_documents ENABLE ROW LEVEL SECURITY;

-- API and server need to read all documents to build chat context (anon or authenticated).
CREATE POLICY "chatbot_documents_select_all" ON chatbot_documents
  FOR SELECT USING (true);

-- Only admins can insert or delete.
CREATE POLICY "chatbot_documents_admin_insert" ON chatbot_documents
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
  );

CREATE POLICY "chatbot_documents_admin_delete" ON chatbot_documents
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
  );
