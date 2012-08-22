# encoding: utf-8

require "fileutils"

file_location = File.dirname(__FILE__)
Dir.chdir(File.join(file_location, ".."))

FileUtils.mkdir 'js-docco' unless File.exist? 'js-docco'
raise %q[There's already a file names 'js-docco'.] unless File.directory? 'js-docco'

FileUtils.mv 'js-docco', 'js-docco-bak'

begin
  Dir.open("./js-coffee").each do |f|
    file_path = File.join("./js-coffee", f)

    unless File.directory? file_path
      ext_name = File.extname(file_path).downcase
      if ext_name == ".coffee" or ext_name == ".js"
        system("docco #{file_path}")
      end
    end
  end
  FileUtils.mv 'docs', 'js-docco'
  FileUtils.rm_rf 'js-docco-bak'
rescue => msg
  FileUtils.rm_rf 'docs'
  FileUtils.rm_rf 'js-docco'
  FileUtils.mv 'js-docco-bak', 'js-docco'
  print msg
ensure
  FileUtils.rm_rf '-p'
end
