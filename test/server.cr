require "http/server"
server = HTTP::Server.new(HTTP::StaticFileHandler.new("."))
server.bind_tcp(8080)
server.listen