class AddIsActiveToProxies < ActiveRecord::Migration
  def change
  	add_column :proxies, :is_active, :boolean, default: false
  end
end
