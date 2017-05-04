# frozen_string_literal: true

module Sass::Script::Functions
  #
  # Computes the arctangent in degrees between two vectors. Useful to know how
  # much rotation the diagonal of a rectangle needs.
  #
  def atan2(y, x)
    y = y.value.to_f
    x = x.value.to_f
    result = Math.atan2(y, x) * 180 / Math::PI
    Sass::Script::Number.new(result)
  end
end
