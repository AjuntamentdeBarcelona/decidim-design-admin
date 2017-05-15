require_relative 'math'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'
set :build_dir, 'public'

configure :development do
  set :environment, 'development'
end

if ENV['RACK_ENV'] == 'production'
  activate :minify_css
  activate :minify_javascript
else
  activate :livereload
end

activate :directory_indexes
configure :build do
  ignore 'shapes/*'
  set :environment, 'production'
end

after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join root, @bower_config["directory"]
  sprockets.append_path File.join root, @bower_config["directory"], "foundation-sites", "scss"
end

# Use the correct vendor prefixes for foundation
activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
end

helpers do
  def icon(name, options = {})
    size = ''
    size += " width=\"#{options[:width]}\"" if options[:width]
    size += " height=\"#{options[:height]}\"" if options[:height]

    aria_label = "aria-label=\"#{options[:aria_label]}\"" if options[:aria_label]
    aria_hidden = "aria-hidden=\"true\"" if options[:aria_hidden]

    role = "role=\"#{options[:role]}\"" if options[:role]

    iconClass = "icon"
    iconClass = "" if options[:removeIconClass]

    "<svg class=\"#{iconClass} icon--#{name} #{options[:class]}\"#{size} #{role} #{aria_label} #{aria_hidden}> <use xlink:href=\"#{asset_url '/images/icons.svg'}#icon-#{name}\" /> </svg>"
  end
end
