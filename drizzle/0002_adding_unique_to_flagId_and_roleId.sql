CREATE UNIQUE INDEX IF NOT EXISTS "unique_flag_role" ON "feature_flag_values" USING btree ("flag_id","role_id");