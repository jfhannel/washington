# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151108223518) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "body"
    t.integer  "post_id"
    t.integer  "answerer_id"
    t.string   "answerer_type"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "answers", ["post_id"], name: "index_answers_on_post_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.string   "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "post_id"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "identities", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "provider"
    t.string   "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "identities", ["user_id"], name: "index_identities_on_user_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.string   "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.string   "title"
  end

  add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree

  create_table "public_figure_users", id: false, force: :cascade do |t|
    t.integer "public_figures_id"
    t.integer "users_id"
  end

  add_index "public_figure_users", ["public_figures_id"], name: "index_public_figure_users_on_public_figures_id", using: :btree
  add_index "public_figure_users", ["users_id"], name: "index_public_figure_users_on_users_id", using: :btree

  create_table "public_figures", force: :cascade do |t|
    t.string   "name"
    t.string   "fb_bio"
    t.string   "fb_about"
    t.string   "fb_emails"
    t.string   "fb_page_url"
    t.string   "fb_gender"
    t.boolean  "fb_verified"
    t.boolean  "fb_identity_verified"
    t.string   "fb_profpic_url"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer  "upvotable_id"
    t.string   "upvotable_type"
    t.integer  "user_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "upvotes", ["user_id"], name: "index_upvotes_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "name"
    t.string   "fb_about"
    t.string   "fb_bio"
    t.string   "fb_profile_url"
    t.string   "fb_gender"
    t.boolean  "fb_verified"
    t.boolean  "fb_identity_verified"
    t.string   "fb_profpic_url"
    t.integer  "fb_age_min"
    t.boolean  "is_admin",               default: false
    t.string   "fb_access_token"
    t.datetime "fb_access_token_expire"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "answers", "posts"
  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "identities", "users"
  add_foreign_key "posts", "users"
  add_foreign_key "upvotes", "users"
end
