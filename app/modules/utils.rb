module Utils

	def toHash(obj)
    	hash = {}

	    obj.attributes.each do |var|
	    	hash[var[0].to_s] = var[1]
	    end
	    
	    return hash
  	end

end