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

ActiveRecord::Schema.define(version: 20160313004013) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "body"
    t.integer  "post_id"
    t.integer  "contributor_id"
    t.string   "contributor_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "answers", ["post_id"], name: "index_answers_on_post_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.string   "body"
    t.integer  "contributor_id"
    t.string   "contributor_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "post_id"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree

  create_table "identities", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "provider"
    t.string   "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "identities", ["user_id"], name: "index_identities_on_user_id", using: :btree

  create_table "notable_event_answer", id: false, force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "answer_id"
  end

  add_index "notable_event_answer", ["answer_id"], name: "index_notable_event_answer_on_answer_id", using: :btree
  add_index "notable_event_answer", ["notable_event_id"], name: "index_notable_event_answer_on_notable_event_id", using: :btree

  create_table "notable_event_comment", id: false, force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "comment_id"
  end

  add_index "notable_event_comment", ["comment_id"], name: "index_notable_event_comment_on_comment_id", using: :btree
  add_index "notable_event_comment", ["notable_event_id"], name: "index_notable_event_comment_on_notable_event_id", using: :btree

  create_table "notable_event_post", id: false, force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "post_id"
  end

  add_index "notable_event_post", ["notable_event_id"], name: "index_notable_event_post_on_notable_event_id", using: :btree
  add_index "notable_event_post", ["post_id"], name: "index_notable_event_post_on_post_id", using: :btree

  create_table "notable_event_public_figure", id: false, force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "public_figure_id"
  end

  add_index "notable_event_public_figure", ["notable_event_id"], name: "index_notable_event_public_figure_on_notable_event_id", using: :btree
  add_index "notable_event_public_figure", ["public_figure_id"], name: "index_notable_event_public_figure_on_public_figure_id", using: :btree

  create_table "notable_event_upvote", id: false, force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "upvote_id"
  end

  add_index "notable_event_upvote", ["notable_event_id"], name: "index_notable_event_upvote_on_notable_event_id", using: :btree
  add_index "notable_event_upvote", ["upvote_id"], name: "index_notable_event_upvote_on_upvote_id", using: :btree

  create_table "notable_event_user", id: false, force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "user_id"
  end

  add_index "notable_event_user", ["notable_event_id"], name: "index_notable_event_user_on_notable_event_id", using: :btree
  add_index "notable_event_user", ["user_id"], name: "index_notable_event_user_on_user_id", using: :btree

  create_table "notable_events", force: :cascade do |t|
    t.integer  "post_id"
    t.integer  "comment_id"
    t.integer  "answer_id"
    t.integer  "upvote_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notable_events_public_figures", force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "public_figure_id"
  end

  add_index "notable_events_public_figures", ["notable_event_id"], name: "index_notable_events_public_figures_on_notable_event_id", using: :btree
  add_index "notable_events_public_figures", ["public_figure_id"], name: "index_notable_events_public_figures_on_public_figure_id", using: :btree

  create_table "notable_events_users", id: false, force: :cascade do |t|
    t.integer "notable_event_id"
    t.integer "user_id"
  end

  add_index "notable_events_users", ["notable_event_id"], name: "index_notable_events_users_on_notable_event_id", using: :btree
  add_index "notable_events_users", ["user_id"], name: "index_notable_events_users_on_user_id", using: :btree

  create_table "notifications", force: :cascade do |t|
    t.integer  "contributor_id"
    t.string   "contributor_type"
    t.integer  "notable_event_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "notifications", ["notable_event_id"], name: "index_notifications_on_notable_event_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.string   "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.string   "title"
  end

  add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree

  create_table "posts_public_figures", id: false, force: :cascade do |t|
    t.integer "public_figure_id"
    t.integer "post_id"
  end

  add_index "posts_public_figures", ["post_id"], name: "index_posts_public_figures_on_post_id", using: :btree
  add_index "posts_public_figures", ["public_figure_id"], name: "index_posts_public_figures_on_public_figure_id", using: :btree

  create_table "proxies", force: :cascade do |t|
    t.integer  "public_figure_id"
    t.integer  "user_id"
    t.boolean  "approved",         default: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.boolean  "is_active",        default: false
  end

  add_index "proxies", ["public_figure_id"], name: "index_proxies_on_public_figure_id", using: :btree
  add_index "proxies", ["user_id"], name: "index_proxies_on_user_id", using: :btree

  create_table "public_figures", force: :cascade do |t|
    t.string   "name"
    t.string   "fb_bio"
    t.string   "fb_about"
    t.string   "fb_emails"
    t.string   "fb_profile_url"
    t.boolean  "fb_verified"
    t.boolean  "verified",       default: false
    t.integer  "fb_likes"
    t.string   "fb_profpic_url"
    t.string   "fb_id"
    t.string   "fb_best_page"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer  "upvotable_id"
    t.string   "upvotable_type"
    t.integer  "contributor_id"
    t.string   "contributor_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

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
  add_foreign_key "identities", "users"
  add_foreign_key "notifications", "notable_events"
  add_foreign_key "posts", "users"
end
