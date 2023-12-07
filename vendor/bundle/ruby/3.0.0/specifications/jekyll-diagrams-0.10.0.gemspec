# -*- encoding: utf-8 -*-
# stub: jekyll-diagrams 0.10.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-diagrams".freeze
  s.version = "0.10.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["zhustec".freeze]
  s.date = "2020-04-19"
  s.description = "A Jekyll plugin with support for Blockdiag, Erd, GraphViz, Mermaid,\nNomnoml, PlantUML, Svgbob, Syntrax, Vega, Vega-Lite and WaveDrom.\n".freeze
  s.email = "zhustec@foxmail.com".freeze
  s.homepage = "https://github.com/zhustec/jekyll-diagrams".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.5".freeze)
  s.rubygems_version = "3.4.1".freeze
  s.summary = "Jekyll plugins for diagrams support.".freeze

  s.installed_by_version = "3.4.1" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.8", "< 5.0"])
  s.add_development_dependency(%q<cucumber>.freeze, [">= 0"])
  s.add_development_dependency(%q<pry-byebug>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
  s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
  s.add_development_dependency(%q<rubocop-rspec>.freeze, [">= 0"])
  s.add_development_dependency(%q<simplecov>.freeze, [">= 0"])
  s.add_development_dependency(%q<simplecov-lcov>.freeze, [">= 0"])
end
