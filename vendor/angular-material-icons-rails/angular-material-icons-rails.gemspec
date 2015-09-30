# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'angular-material-icons-rails/version'

Gem::Specification.new do |spec|
  spec.name          = "angular-material-icons-rails"
  spec.version       = AngularUI::MaterialIcons::Rails::VERSION
  spec.authors       = ["RodesChen"]
  spec.email         = ["rodes.chen@gmail.com"]
  spec.description   = "Injects AngularUI UI-ROUTER into your asset pipeline."
  spec.summary       = "Angular-ui ui-Router on Rails"
  spec.license       = "MIT"
  spec.files         = Dir["{lib,app}/**/*"] + ["MIT-LICENSE", "README.md"]
end
