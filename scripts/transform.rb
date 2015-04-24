#!ruby

require 'optparse'
require 'nokogiri'
require 'json'

@options = {}
OptionParser.new do |opts|
  opts.banner = "Usage: transform.rb [options]"
  opts.on('-s', '--source FILENAME', 'Source html snippet') { |v| @options[:source_filename] = v }
  opts.on('-t', '--test [true]', 'replace images with test image paths') { |v| @options[:test] = true }
end.parse!

def random_platform
  val = rand(10)
  case val
    when 0,1,2,3,4,5
      'pc'
    when 6,7,8
      'mobile'
    when 9
      'xbox'
    else
      'playstation'
  end

end

def random_genre
  val = rand(10)
  case val
    when 0,1,2,3,4,5
      'action'
    when 6,7,8
      'shooting'
    when 9
      'horror'
    else
      'unknown'
  end
end


game_list_source = File.open(@options[:source_filename])
game_list_document = Nokogiri::XML(game_list_source)

game_list = []
game_list_document.css('li').each do |game_node|
  elem = game_node.at_css('.release-date')
  release_date = elem.nil? ? nil : elem.content
  links = game_node.css('a')
  if !links.empty?
    initial_link = links.shift
    elem = game_node.at_css('img.first')
    thumbnail_link = elem[:src] unless elem.nil?
    thumbnail_link = 'images/test_thumbnail.jpg' if @options[:test]
    elem = game_node.at_css('img.last')
    logo_link = elem[:src] unless elem.nil?
    logo_link = 'images/test_logo.png' if @options[:test]
    game_list.push({
                     :name => initial_link[:title],
                     :link => initial_link[:href],
                     :thumbnail_link => thumbnail_link,
                     :logo_link => logo_link,
                     :release_date => release_date,
                     :additional_links => [],
                     :franchise => nil,
                     :platform => random_platform,
                     :genre => random_genre
                   })
    while ! links.empty? do
      the_link = links.shift
      game_list[game_list.length - 1][:additional_links].push({
                                                               :name => the_link.content,
                                                               :link => the_link[:href]
                                                             })
      game_list[game_list.length - 1][:franchise] = the_link[:href][1..-1]
    end
  end
end

puts JSON.pretty_generate(game_list)
