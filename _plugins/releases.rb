Jekyll::Hooks.register :site, :post_read do |site|

  site.data["os_map"] = {
    "ubuntu18" => "Ubuntu 18",
    "ubuntu16" => "Ubuntu 16",
    "centos7" => "Centos 7 / EL7"
  }

  current_version = site.data["current"]["version"]
  current_os = site.data["current"]["os"]
  site.data["install_instructions"] = {
    "release" => site.data["releases"][current_os][current_version],
    "os" => site.data["os_map"][current_os]
  }

  site.data["releases"].each do |os, releases|
    sorted_releases = []
    releases.each do |version, release_details|
      if release_details["platform"] == "el"
        release_details["platform_readable"] = "Centos"
      elsif release_details["platform"] == "ubuntu"
        release_details["platform_readable"] = "Ubuntu"
      else
        release_details["platform_readable"] = release_details["platform"]
      end
      sorted_releases << release_details
    end
    sorted_releases.sort! do |a, b|
      left = Gem::Version.new(a["build_version"])
      right = Gem::Version.new(b["build_version"])
      next 1 if left < right
      next -1
    end
    site.data["releases"][os] = sorted_releases
  end
end
